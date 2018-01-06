---
layout: post
title: "Keeping It Clean: Coding Standards That Matter"
date: 2017-07-26 06:00:00
image: '/assets/img/'
description: 'Some common practices we all should follow.'
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
twitter_text: 'Keeping It Clean: Coding Standards That Matter'
---

A year back, I was working on a project that taught me how to keep my code clean, modular, reusable, and all those terms that seem fancy, but are actually good for you in the long run. Interesting? Yeah a bit.

But what did I do after getting into those practices?

I made mistakes. Believe me, a lot of them. But with every mistake, I learnt a lot of stuff that I had never considered before. It helped me in my thinking process, on how we should build things, what steps we need to consider when we are developing/extending a feature. And most importantly, these learnings were not just personally helpful, but also crucial for team growth.

At first we used to get frustrated because we had to follow the additional process like adding documentation, maintaining changelog files, following the code standards, and keeping them consistent throughout the team. These extra steps seemed cumbersome and we were not able to relate how this can be useful for us (team). And we are still learning/improving everyday in this respect. But after few months we started loving and improvising the process.

So here I am, sharing my what I have learnt. And trust me when I say, after getting this into practice you can’t live without following this.

This post is focused on what practices we follow everyday to make our lives easier (More focused on PHP/Drupal but can be followed, we follow pretty generic practices).

## Let’s start off with simple things:

**Commenting and Documentation Standards**

Commenting doesn’t mean adding a bunch of comments and random documentation anywhere while coding. There are things which you should mention to make your colleagues’ lives easier, and yours as well.

- Start with writing a description of your component, why you are creating it, and what is the aim you would like to accomplish here, what does it do etc.
- If there are modifications being done, then those should be logged by creating a Changelog.md file attached to your component. Maintain a specific format to have consistency throughout.

This is something we follow at Srijan, hope this is pretty clear:
CHANGELOG.md file sample:

![Changelog sample](/assets/img/2017-07-26-coding-standards-that-matter/changelog.png)

- It’s good practice to add @see, referencing the class, which will help easily navigate to that class definition by using IDE like PHPStorm, or editors like Sublime etc with just one click.

![Function referencing](/assets/img/2017-07-26-coding-standards-that-matter/fn-referencing.png)

- Add @TODOS wherever necessary. It’s very important if you feel your code can be improved in future and you have the ideas on how to do it, but not enough time at the moment. Mention what needs to be improved above that code snippet. One good example could be:

![Todo example](/assets/img/2017-07-26-coding-standards-that-matter/todo-example.png)

- Create README.md files so that others can easily understand what is the working of the module.
For example:

![Readme example](/assets/img/2017-07-26-coding-standards-that-matter/readme-example.png)

- A “Docblock” is a special code comment that offers an explanation of the purpose, arguments, return values, and throw exceptions for a block of code.

![Docblock example](/assets/img/2017-07-26-coding-standards-that-matter/docblock-example.png)

Something very informative in a simple tweet I found:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">If your docblock doesn&#39;t offer more information than is available from reading the func signature, you are just wasting my time. <a href="https://twitter.com/hashtag/RealDocs?src=hash">#RealDocs</a></p>&mdash; Larry Garfield (@Crell) <a href="https://twitter.com/Crell/status/539547553608761344">December 1, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

**Formatting**

This might include indenting, whitespace, brace positions, and new lines and this can be different according to different languages. In our case, this is specific to PHP (Drupal). There are a lot of plugins available in editors to beautify your code.

**Naming Conventions**

* Of course naming conventions depend on the language you are using ( examples: Zend, Google style guides for PHP, CSS, Javascript, Java, etc ) but the main idea is to use descriptive and meaningful words. So, you should avoid calling your variables: xx, yy2, test1, test2 and so on.
* For example, lower_case for PHP variables and functions, camelCase for JS variables and functions, lower-case-hyphenated for CSS ID's and classes, UPPER_CASE for constants.
* We should name our variables in a way which easily explains the type of data they contain. Similarly in case of functions, they should describe what kind of functionality they are providing. This is called self-documenting code. Functions should tell what they do, not how. This is called abstraction which allows the underlying implementation to be changed without changing the function name.

**Portability**

Keep your code as loosely coupled as possible. It is "portable" in that the amount of work required to move it from one platform to another is low. There are few things we should have in mind while coding:

- Avoid using hardcoded values like absolute file paths, URLs etc  unless it’s a matter of life and death (:P)
- Avoid using magic numbers in your code. Basically it’s a hard-coded value that may change at a later stage, and hence become hard to update. Almost all numbers other than 0, 1 or 2 should be assigned to a constant at the top of the file. This provides a single point of change if the value changes, rather than a search-and-replace that could affect many files and potentially introduce bugs.

**Linters**

There are different types of tools available to find syntactic discrepancies in general, especially in interpreted languages like JavaScript, PHP, Python etc. They can also be used as simple debuggers for finding common errors. Here’s a look at the common linters we use at Srijan:

* PHP:
  * We use PHP Code Sniffer with Drupal integration. One can easily configure it with your editors such as Sublime which will show common PHP errors on save, which saves a lot of time and prevents errors before committing your changes.

* Javascript:
  * We have Drupal JavaScript coding standards (note - these vary in several ways from Mavericks standards) in place but we use JSHint for listing our JS related code checks.
  * Wherever Drupal's JS formatting conventions conflict with JSHint, JSHint supersedes.

* SCSS:
  * We do not have any SCSS related documentation on Drupal.org but we do have Drupal CSS coding standards (these can be applied to SCSS code).
  * You can find some documentation related to SCSSLint here.
  * Also it’s good to checkout Compass best practices as well.

**Reusability**

This is something we are working on quite extensively. We are building reusable components which can be used in across different websites (which have almost the same purpose). These components will provide the basic functionality and styles which can be overridden in different websites according to their own requirements. The most important thing here is to identify what functionality can be turned into a component.The degree to which your code is reusable is largely based on how tightly it’s coupled with the rest of your code base. A good example can be building a banner slider which can be used in most of the websites.

**Modular**

This basically means keeping your code independent of others, so that one bad change to your code does not break everything else. This is similar to the concept of coupling in object oriented programming. It’s like breaking the website into its basic independent parts of a more manageable size.

**Use Continuous Integration Tools**

We use Travis CI. It’s a distributed continuous integration service used to build and test projects on github. The service is free for open source projects. You  might be wondering why you didn’t you use it before! 😛 Don’t worry, It’s never too late and [pretty easy to setup with your github repositories][github-repo].

- First step is to register Travis-CI, which you can also do with your github account.
- Setup the .travis.yml file, This file handles the build of your environment and also the execution of the phpunit files.

You can check the simplest basic configuration here:

![travis repo example](/assets/img/2017-07-26-coding-standards-that-matter/travis-repo.png)

When you have the phpunit test in place and if it is passed, it will show something like this on your commit:

![travis success message](/assets/img/2017-07-26-coding-standards-that-matter/travis-success-msg.png)

You can check the simple Travis setup [here][travis-repo-link]:

This `.travis.yml` should be at the root of the project.
Travis only runs builds on the commits you push after you’ve enabled the repository in Travis CI.

Code Reviews
We have pretty awesome code review process in place. But this blog is already too long, so I shall cover that in my next blog. Stay tuned.

[github-repo]: https://docs.travis-ci.com/user/getting-started/
[travis-repo-link]:  https://github.com/lhuria94/drupal/pull/3
