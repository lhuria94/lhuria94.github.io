---
layout: post
title: "Bigpipe Cachingi: Making Web 2x Faster"
date: 2017-01-21 05:21:35
image: '/assets/img/'
description: 'How Bigpipe came in picture for making web 2x faster'
main-class: 'drupal8'
tags:
- performance
- drupal
- drupal 8
- planet drupal
categories:
- Performance
- Drupal 8
twitter_text: 'How Bigpipe came in picture for making web 2x faster'
---

Everyone loves a fast website. It’s one of the critical goals for every web developer to build a site that’s twice as fast than a previous one. And ‘BigPiping’ a website makes it super fast. BigPipe is a fundamental redesign of the dynamic web page serving system.

Typically, 80-90% of the loading time is spent on front end which is very huge.

A few important metrics to observe are:
- Time To First Byte (TTBF): Time taken between requesting html page and starting to receive the first byte of response. In this time, the client and the browser can’t do anything.
- Time To Interact (TTI): Completely dependent on use case, but it’s what really matters.
- Page load time: Total load time until loading is complete.

## Facebook’s story on Bigpipe
The basic idea here is to break the webpage into small chunks called pagelets and pipelining them to go through several execution. You know why Facebook loads very fast? That’s because Facebook uses Bigpipe for loading content. Facebook loads the structure of the page in chunks and the elements which are difficult to load come afterwards.

It seems like Facebook loads very fast, but it actually takes 5-6 seconds for everything to load. What happens is that it loads the unchangeable parts first and personalised parts later, like friends list, groups, pages etc.

Facebook’s homepage performance after using Bigpipe caching

![Bigpipe rating chart](/assets/img/2016-04-21-bigpipe-caching-making-webx-faster/bigpipe-chart.jpg)

{% highlight ruby %}
Source: Facebook
{% endhighlight %}

The graph shows that BigPipe reduces user perceived latency by half in most browsers.

## Bigpipe in Drupal 8
In Drupal 7 or any other CMS, the webpage gets comparatively slower ones we add customisations or personalisation it. After Using Bigpipe in Drupal 8, this is no longer an issue.

This technology was only available to Linkedin and FB. But now it’s available as a module in Drupal 8.

Facebook did the streaming of content in so called pagelets. Wim & Fabian (Author of Drupal 8 Bigpipe module) named it "auto-placeholdering” for Drupal 8 which differentiates the static sections of the page from dynamic ones.

Here is the example of comparison between standard drupal caching & bigpipe:
[Here is the link to video][bigpipe-youtube-video]
{% highlight ruby %}
Source: Drie Buytaert/ Youtube
{% endhighlight %}

If we provide the correct cacheability metadata, Drupal will be able to automatically deliver personalised parts of the page later, without you having to write a single line of code.

Wim Leers, the author of this module explained it as follows:

 “The problem we were solving: Drupal 7 can’t really cache its output because it lacks metadata for caching. It generates just about everything you see on the page on every page load, even things that don’t change. Drupal 8 does far less work when serving a page, because we brought cacheability metadata to everything. BigPipe is the most powerful way to put that cacheability metadata to use and it delivers the most significant performance improvements.

BigPipe was not possible before Drupal 8. So, no, it's the other way around: BigPipe has changed Drupal 8 and made it the fastest Drupal yet.” - Wim Leers.

## How BigPipe works

To exploit the parallelism between web server and browser, BigPipe first breaks web pages into multiple chunks called pagelets. Just as a pipelining microprocessor divides an instruction’s life cycle into multiple stages (such as “instruction fetch”, “instruction decode”, “execution”, “register write back” etc.), BigPipe breaks the page generation process into several stages:

- Request parsing: Web server parses and sanity checks the HTTP request.
- Data fetching: Web server fetches data from storage tier.
- Markup generation: Web server generates HTML markup for the response.
- Network transport: The response is transferred from web server to browser.
- CSS downloading: Browser downloads CSS required by the page.
- DOM tree construction and CSS styling: Browser constructs DOM tree of the document, and then applies CSS rules on it.
- JavaScript downloading: Browser downloads JavaScript resources referenced by the page.
- JavaScript execution: Browser executes JavaScript code of the page.

(From the Facebook Engineering blog)

I'd really like to thank Wim Leers & Fabian and others who worked really hard on bringing this caching strategy to Drupal 8 core with 8.1 release.

[bigpipe-youtube-video]: https://youtu.be/JwzX0Qv6u3A
