---
layout: post
title: "Time to level up Code Reviews"
date: 2017-10-16 06:00:00
image: '/assets/img/'
description: 'This is a short and crisp summary of how we do code reviews.'
main-class: 'misc'
tags:
- code quality
- coding standards
- general
- drupal
- planet drupal
categories:
- Coding Practices
- Drupal
- General
twitter_text: 'Time to level up Code Reviews'
---

Being part of a Code review process is very important for us and trust me we take it very seriously. This is required not just for the team but for an individual learning as well.

Code reviews are very crucial for knowledge transfer and to avoid making small/common mistakes and of course maintaining best practices throughout the dev team. So Let’s take my team for example: we are around 11 developers in the team, all producing code which needs to be reviewed. So basically yeah that’s a whole lot of code!

## Why It’s Important?

Pushing code to production is easy. Anyone can do it, right? What concerns us that what pieces we are going to deploy.

The code can be completely fine or it can be a piece which can make everything fall apart. To maintain high code quality, we all need to have Peer code reviews. There is nothing negative here, we all are on the same team and we have a common goal that is to deliver the highest quality product.

You must be thinking, Is it worth it? No? Yes?

Definitely yes, Not having code review integrated into projects can result in big problems. You may have heard of the disaster happened long back: Here you [go][toyota-spaghetti-blog-post]{:target="_blank"}.

There was a lot of reason why this incident happened and one of the reasons was an absence of a peer code review. After reviewing their source code they found – possible bit flips, task deaths that would disable the fail-safes, memory corruption, single-point failures, inadequate protections against stack overflow and buffer overflow, single-fault containment regions, thousands of global variables. The list of deficiencies in process and product was lengthy.

## How we roll things here?

**General Development Process**

![Dev process](https://lhuria94.github.io/assets/img/2017-10-16-time-to-level-up-code-reviews/dev-process.png)

FYI :wink:
* Green line: Determines pass status.
* Red line: Determines fail status.

This is our general flow which is being followed in most of the projects, of course, columns may vary depending on the different aspects, clients, and projects. Hope it’s very clear :sweat:, if not I tried my best!! Haha :smile:

**Github Code review flow**

![Github project](https://lhuria94.github.io/assets/img/2017-10-16-time-to-level-up-code-reviews/github-project.png)

Now it’s really easy maintaining your code review process just a few clicks away on GitHub (And it’s really awesome!). We can create new projects on our repo and use it as we want.

Generally, we have around four columns which are usually enough:
- Ready for review: You can add cards (Pull requests) to this column if your code is ready to be reviewed.
- In review: Now its code reviewer’s responsibility to move the card to "In review" column so that it gets updated on the branch and the concerned dev understands that his/her ticket is currently being reviewed.
- Change Requested: Again this is code reviewer’s responsibility to move the card to this column if the review has failed standards. Then concerned dev will do the required fixed and need to push the ticket back to “Ready for review”.
- Closed/Done: If the card is lying there in “Closed” column, that means the PR has passed standards it should have.

**What to look for when reviewing**

There are certain aspects which we consider while reviewing code and some of them are the following:

* Best practices pertaining to Drupal standards. Can be found [here][drupal-standards].
* JS specific coding standards. Can be found [here][drupal-js-standards].
* SCSS specific coding standards. Can be found [here][scss-standards].
* Anything developed which is adding technical debt. For instance choosing an easy solution making it harder to implement changes later on.
* Security issues
* Potential Impacts which can introduce performance issues/threats to existing solutions
* Solutions being developed which are already available in the codebase and can be reused.
* General standards like formatting, linting issues, comments, naming patterns etc.

**Who is responsible**

We have set few guidelines on who will be responsible for the code review process. Here are the points:

* There will be one Senior and one Junior Code Reviewer for each ticket.
* Reviews will be done right after the daily standup. (Depending on how long it will take.)
* One person will review at least one ticket in a day (If there is any ticket assigned on the board)
* Tickets should be in respective columns according to the latest update. (Code reviewer & dev's responsibility)
* If there is any feedback from Senior code reviewer, its Junior code reviewer's responsibility to look what he/she has missed.

**Making sure the process being followed**

We regularly come back and observe how we are doing according to set process and if there is any way how we can improve to make sure it's being followed and not a burden/blocker for any one’s work.

The process is clearly defined and maintained on different platforms depending on client and teams. We usually use Confluence and highly recommend it to anyone who is reading this post.

**Learning from our mistakes**

We have maintained a code feedback sheet where we mention common mistakes we need to avoid. Everyone has access from the team and can add points on where we can improve, new techniques to achieve certain functionality, strictly avoiding certain coding patterns.

> Our goal is to
Enhance the learning of individuals to become better programmers.
Improving the quality of codebase, it gets complex to manage as it grows.
Not to deliver just quantity but quality throughout.
Maintaining discipline within the team and understand the seriousness of spaghetti code.


That’s about it! Few things I may have missed for sure in this. Connect with me at [lovehuria@gmail.com][mail] (:email:) if you would like to know more OR just comment down here. :)

[toyota-spaghetti-blog-post]: http://www.safetyresearch.net/blog/articles/toyota-unintended-acceleration-and-big-bowl-%E2%80%9Cspaghetti%E2%80%9D-code

[drupal-standards]: https://www.drupal.org/docs/develop/standards

[drupal-js-standards]: https://www.drupal.org/docs/develop/standards/javascript/javascript-coding-standards

[scss-standards]: https://www.drupal.org/docs/develop/standards/css/css-coding-standards

[mail]: mailto:lovehuria@gmail.com
