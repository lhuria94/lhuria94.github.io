---
layout: post
title: "Docker: A Microcontainer for Faster Software Workflows"
date: 2017-02-11 07:32:44
image: '/assets/img/'
description: 'First steps to use docker'
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
twitter_text: 'Docker: A Microcontainer for Faster Software Workflows'
---

Docker, a container-based technology which I just came across, is great for setting up environments. It was first introduced to the world by Solomon Hykes, founder and CEO of dotCloud at Python Developers Conference in Santa Clara, California, in March 2013. The project was quickly open-sourced and made available on GitHub, where anyone can download and contribute to it.

## Containers vs. Virtual Machines

You might be wondering, "What is the difference between Containers (like Docker) and Virtual Machines"?

Well, virtual machines (VM) work by creating a virtual copy of a computer's hardware, and running a full operating-system on that virtual hardware. Each new VM that you create results in a new copy of that virtual hardware, which is computationally expensive. Many people use VMs because they allow you to run an application in a separate environment which can have it's own versions of software and settings, which are different from the host machine.

On the other hand, container technologies like Docker, isolate the container's environment, software, and settings, in a sandbox; but all sandboxes share the same operating-system kernel and hardware as the host computer. Each new container results in a new sandbox. This enables us to pack a lot more applications into a single physical server as compared to a virtual machine.

Docker containers are isolated enough that the root process in a container cannot see the host machine’s processes or filesystem. However, it may still be able to make certain system calls to the kernel that a regular user would not, because in Docker, the kernel is shared with the host machine. This is also why Docker containers are not virtual machines and thus a lot faster.

Note, however, that Docker relies on a technology which is only available in the Linux kernel. When you run Docker on a Windows or Macintosh host machine, Docker and all it's containers run in a virtual machine.

That said, there are two projects trying to bring Docker-style containers natively to OS/X , Dlite and Xhyve. But last I heard, these projects were still very experimental. So consider yourself warned.

When you are done with a container, on a Mac host machine, it’s probably good to suspend the containers, because they run in a virtual machine and that has a lot of overhead. But on a Linux host machine, there would be no need to suspend them because they would not create (much) additional overhead (no more than, say, MAMP).

Docker is a tool that promises to scale into any environment, streamlining the workflow and responsiveness of agile software organizations.

## Docker’s Architecture

This is a diagram explaining the basic client-server architecture which docker uses.
![Docker architecture](/assets/img/2016-07-11-docker-microcontainers-for-faster-workflows/architecture.png)

{% highlight ruby %}
Image source: http://www.docker.com
{% endhighlight %}

## Important Terminology
- Docker daemon: A Docker engine which runs on the host machine as shown in the image above.
- Docker client: A Docker cli which is used to interact with the daemon.

## Workflow components
- Docker image: A read-only disk image in which environment & your application resides.
- Docker container: A read/writeable instance of an image, which you can start, stop, move, and  delete.
- Docker registry: A public or private repository to store images.
- Dockerfile: A Dockerfile is instructions for how to build a single image. You can think of a Dockerfile as kind of Vagrantfile, or a single Chef cookbook, or an Ansible script, or a Puppet script.

## Microservices

Because Docker allows you to run so many containers at the same time, it has popularized the idea of microservices: a collection of containers, each of which contain a single program,  all of which work together to run a complex application (e.g. Drupal).

Taking Drupal as an example, every Drupal site has at least two dependencies: an HTTP server (Apache, Nginx, etc.) running PHP; and MySQL. The idea of microservices would involve packaging Apache+PHP separately from MySQL; as opposed to most Drupal virtual machine images which bundle them together into the same VM. For more complicated setups, you could add another container for Solr, another container for LDAP, etc.

For me, the main advantage of using microservices is that it’s easier to update or swap one dependency of an application without affecting the rest of it. Another way of looking at this is that microcontainers make it easier to modify one piece without waiting a long time for the virtual machine to rebuild.

When I was using a virtual machine on a particularly complex project, if I needed to make a change to a setting, I had to make that change in the Puppet config, then run vagrant destroy && vagrant up and wait two hours for it to tell me that the new configuration wasn’t compatible with some other piece of the system. At which point I had to repeat the two hour process, which wasted a lot of time.

If I had been using Docker (properly), then I could have just changed the setting for that one program, rebuild that program's container (5 seconds), and not have to worry that one piece of the machine needed at least Java 6 and the other piece of the machine could not work without Java 5.

Now that you know the possibilities with Docker, watch this space to find out how all this applies to Drupal.
