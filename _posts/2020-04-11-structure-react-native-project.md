---
layout: post
title: 'Structure a React Native App'
date: 2020-04-11 00:00:00
image: '/assets/img/2020-04-11-structure-react-native-project'
description: ''
main-class: 'js'
tags:
- javascript
- architecture
- mobile
- react-native
- react
- structure
categories:
- Performance
- Javascript
twitter_text: 'Structure a React Native App'
cover_image: '/assets/img/2020-04-11-structure-react-native-project'
---

> Heads up! The structure proposed in this post is not official, it just worked nicely for me and hopefully, it will help someone else on this earth. 🙂

Here we are, writing my first post around React Native after successfully launching an app in the App Store. Not at all showing off. It was a Team effort.

But it really gave me insight with respect to "How to work around mobile apps" after being in web stack for so long. Fantastic change and am really in love with "React Native". 🤩

This post is specifically about how to structure your React Native apps/projects in terms of folders/files.

### Background of "Why this is even helpful"
React is created by [Facebook][facebook] and being used by a variety of organizations. So, Instead of being opinionated on the folder/file structure of the application, its left to the individuals to decide how they would like to build it. 

This further leads to different approaches proposed by either community or individuals solving different problems.

### Structure we follow
Below Structure assumes the following (But not mandatory in all projects):
* You have Redux in your architecture
* You have support for dark mode as well

![Structure](/assets/img/2020-04-11-structure-react-native-project/structure.png)

If you look at the above structure, most of it is self-explanatory. However, I would like to focus on some of the aspects.

- **src/api**
  - helper.js - This file will have helper methods w.r.t any code related to APIs. Like get, post, put, etc.
  - utils.js - Here we could add usual utility functions.
- **assets**
  - icons - Keep all of your icons (SVGs) or any other format you usually use.
  - images - Keep all of your images (background images), logos, etc.
  - themes
    - light.js - Have all of your light theme styles here such as color palette, fonts, etc.
    - dark.js - Have all of your dark theme styles here.
    - themeProvider.js - This will contain the logic of deciding which theme to use based on the User's preferences.
- **components**
  - common - This will contain re-usable isolated components like button, input, tabs, etc.
  - sections - This will contain reusable sections like navigation i.e sidebar, bottom navigation, etc.
- **config** - I find this particularly very useful, we keep all the configurations with respect to say forms, static lists, action messages, validation messages, etc.
- **features** - A lot of people call this directory as components as well, which seem confusing to me as we can have more components inside features as well. This will have standard modules/features, the basic functionality of the site.
- **global** - This will have global functions that can be reused throughout the application.
- **routes** - This will have site-level navigation defined.
  - routes.navigator.js
- **store** - This will contain the app level state management which will serve the app current state.

> Keep in mind, that this structure is not specific to react-native, we could use in "React" projects as well. That's up to us.
> Furthermore, the structure does not include core files such as package.json, babel, eslint, etc as they are mostly going to be at the root anyway.

That's all. If you would like to read more about it, I'd refer few good links to go through:
* [Best Practices for React native apps][best-practices]

Thanks for reading. 😃

[facebook]: https://opensource.facebook.com/
[best-practices]: https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3