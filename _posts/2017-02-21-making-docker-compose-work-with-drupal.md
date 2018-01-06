---
layout: post
title: "Making Docker Compose Work with Drupal"
date: 2017-02-21 03:21:35
image: '/assets/img/'
description: 'How to make docker compose work with Drupal'
main-class: 'devops'
tags:
- continuous integration
- docker
- drupal
- git
- planet drupal
categories:
- Continuous Integration
- Productivity
twitter_text: 'Making Docker Compose Work with Drupal'
---

My last post talked about [how Docker microcontainers speed up the software development workflow][docker-architecture-blog]. Now it's time to dive into how all this applies to Drupal.

I created a collection of [Docker configuration files][docker-git-repo] and scripts to make it easy to run Drupal. If you want to try it out, follow the steps in the README file.

The repository is designed using the microcontainers concept, so that each Drupal site will end up with 3 containers of it's own (Apache, MySQL and Drush containers), which are linked together, to run our application. If you want to serve a new site, you need to create separate containers.

In theory you could re-use containers for different web applications. However, in practice, Docker containers are resource-cheap and easy to spin up. So it’s less work to run separate containers for separate applications than it is to configure each application to play nice with the other applications running on the same container (e.g.: configuring VirtualHosts and port mappings). Or at least this is what my colleague [M Parker][mparker-link] believes.

Plus, configuring applications to play nice with each other in the same container kind of violates the “create once, run anywhere” nature of Docker.

## How it works
My repository uses the docker-compose program. Docker-compose is controlled with the docker-compose.yml file, which tells Docker which containers to start, how to network them together so they serve Drupal, and how to connect them to the host machine. This means serving the Drupal repository filesystem and mapping a port on the host machine to one of the ports in one of the containers.

A useful tip to remember is that docker-compose ps will tell you the port mappings as shown in the screenshot below. This is useful if you don't map them explicitly to ports on the host machine.

![Docker terminal](/assets/img/2016-07-21-making-docker-compose-work-with-drupal/terminal-docker.png)

## Networking
If you've ever tried setting up a bunch of containers manually (without docker-compose), it is worth noting (and not very well documented in the Docker docs, unfortunately) that you don’t need to explicitly map port 3306:3306 for the mysql container, because docker-compose sets up a miniature network for containers run from the same docker-compose.yml. It also sets up hostnames between each container in the same docker-compose.yml. This means that the web container can refer to the mysql-server machine with the hostname mysql-server, and, even if you implicitly map 3306 to some random port on the​ host machine, web can talk to mysql-server on port 3306.

Note in this case that the container running MySQL is named db, so, when you're installing Drupal, on step 4 (“Database configuration”) of the Drupal 7 install script, you have to expand “Advanced options”, and change "Database host” from localhost to db!

## Filesystem
It is possible to put the Drupal filesystem into a container (which you might want to do if you wanted to deploy a container to a public server). However, it doesn't really make sense for development, because most of the time, you're changing the files quite frequently.

To get around this requirement for a development environment, we mount the current folder (often referred to as ‘.’) to /var/www/html in the container, which matches where the current directory is mounted in all three containers. This is done with the 'volumes' directive in the docker-compose.yml file. The ’working_dir’ directive says “when you run the Drush command in the Drush container, pretend it’s running from /var/www/html”, which is the equivalent of ‘cd /var/ww/html’ before you run a drush command.

So when you run the Drush command in the Drush container, it sees that it’s currently in a Drupal directory and proceeds to load the database connection information from sites/default/settings.php which tells it how to connect to the mysql on the `db` container with the correct credentials. (recall the `links` directive makes sure that the `drush` container can access the `db` container so it can connect to it on port 3306).

## The Drush container
The drush container is a bit special because it runs a single command, and is re-created every time a Drush command is used.

If you look at the step 9 of my [Docker configuration files][docker-git-repo] you’ll see it says…

- Run Drush commands with:
{% highlight ruby %}
USER_ID=$(id -u) docker-compose run --rm drush $rest_of_drush_command
{% endhighlight %}

… i.e.: `docker-compose run --rm drush`
i.e. start the container named `drush`, pass it `$rest_of_drush_command`

![Docker terminal containers](/assets/img/2016-07-21-making-docker-compose-work-with-drupal/docker-t-2.png)

If you look at the Dockerfile for [Mparker's Dockerfile][mparker_dockerfile], you’ll see it contains a line saying ‘ENTRYPOINT ["drush"]’. ENTRYPOINT is a variant of the CMD command which passes all the rest of the ‘docker run’ parameters to the command specified by the ENTRYPOINT line.

So what happens when you run that ‘docker-compose run’ line is that it creates a new container from the ‘mparker17/mush’ image, with all the configuration from the ‘docker-compose.yml’ file. When that container runs, it automatically runs the ‘drush’ command, and docker-compose passes ‘$rest_of_drush_command’ to the ‘drush’ command. When the ‘drush’ command is finished, the container stops, and the ‘--rm’ thing we specified deletes the container afterwards

Running `USER_ID=$(id -u)` before a command sets an environment variable that persists for that command; i.e.: when `docker-compose` runs, an environment variable $USER_ID exists; but $USER_ID goes away when docker-compose is finished running. You can leave out the `USER_ID=$(id -u)` if you add that line to your shell’s configuration. Essentially what that environment variable does is set the user account that the Drush command runs as. If you don’t specify the user account, then Docker defaults to root.

The main reason why I do this is so that if I ask Drush to make changes to the filesystem (e.g.: download a module, run `drush make`, etc.) that the files are owned by me, not root (i.e.: so I don’t have to go around changing ownership permissions after I run the drush command)

It may only be necessary on Windows/Macintosh, because the virtual machine that Docker runs in on Win/Mac has different user IDs — I think if you run a Docker command from a Linux machine, your user id is already correct; but because a Docker command on a Mac/Win is run with your Mac/Win user ID (e.g.: 501) but gets passed to the docker VM’s ‘docker’ user (which runs as user 1000), some problems arise unless you’re explicit about it.

Acknowledgements
Lastly, I would like to thank [Matt Parker][mparker-link] here, who has been mentoring me since the beginning of setting up docker and telling me better ways to do it. He also recommends reading the [Docker book][docker_book_link] if you want to explore this further.

[docker-architecture-blog]: {{site.baseurl}}/docker-microcontainers-for-faster-workflows/
[docker-git-repo]: https://github.com/lhuria94/docker-drupal-lamp
[mparker-link]: https://www.drupal.org/u/mparker17
[mparker_dockerfile]: https://hub.docker.com/r/mparker17/mush/~/dockerfile/
[docker_book_link]: https://www.dockerbook.com/
