---
layout: post
title: "How to plan and execute your first mobile app using React Native"
date: 2020-10-25 00:00:00
image: "/assets/img/2020-10-25-how-to-plan-and-execute-your-first-mobile-app-using-react-native"
description: ""
main-class: "react"
tags:
  - javascript
  - architecture
  - mobile
  - react-native
  - react
  - structure
categories:
  - React
  - React-Native
  - Javascript
twitter_text: "How to plan and execute your first mobile app using React Native"
---

> To give some background, I steered a project this year which was a hell of a challenge for me. "A corporate B2B2C mobile application". In this project, I understood the meaning of contributing not only from a programming point of view but also thinking through all aspects of it i.e. planning, setting up a foundation, asking the right questions to business, identifying tools, development/deployment practices along with keeping in mind that app also needs to be delivered on time.

So, I thought about penning this down, because initially, I had to do a lot of exploration, at some places I got lost as well; therefore I am optimistic that this post will help someone who’s trying to achieve the same.

Before we get into the tech side of it i.e any of the groundwork; it's essential that the scope and designs are clearly communicated to Business stakeholders considering what are we going to cover in a defined time-frame.

# Getting started with the "Discovery and Design" phase

For any project, or to be specific mobile-application in our case; laying down different features required in the system like offline capability, barcode scanners, background streaming, user's privacy & standard business requirements should be discussed and sorted out in its initial phase.

I have seen it happen that in the mobile world; one thing could be obvious to your stakeholder but not to you.

That's what this discovery and design phase includes.

## Listing down requirements

This included:

- the list of features we were going to deliver to the client with all possible workflows and getting their approvals on it keeping in mind any kind of change requests asked by the business during this phase.
- the list of devices we were going to test mentioning different resolutions, OS, etc.
- the list of devices that would be tested on simulators or on a real device.

## Focusing on user experience

We believed in total transparency of showcasing the designs, having weekly demos, getting feedback from the stakeholders pro-actively. These meetings were important for everyone to understand how the mobile application will look and behave like; ultimately coming to a consensus.

### Important stakeholders who should participate during this activity

- Design Lead
- Technical Lead
- Project Managers
- Business stakeholders

## NFRs

Along with the features list and scope, we also thought about NFRs from a mobile app perspective. NFRs should also be discussed and prioritized amongst your stakeholders, there is a need sometimes to put the perspective in place; otherwise, it will be just a clone of your web application.

### Some examples of NFR may include

- `Responsiveness:` In this case, handle any kind of interruption usually by calls, text messages, switching apps, etc, and reverting back to the same state which you were doing before the interruption without losing your progress.
- `Screen Adaption:` With different mobile devices, we get various screen sizes and applications should be able to adapt to it.
- `Slow Connection / Handling n/w coverage:` Here, need to take care of the slow connection, show a proper message in case the app is not able to perform certain operations.
- `Performance:` This covers app startup time, quick scrolls, switching b/w operations, etc.
- `Security:` This means mostly using an encrypted data store (e.g. keychain), enabling ATS for secure communication, etc.

## Get your Style-guide ready
Once you are sorted with designs, getting them approved; the next task for the designer would be to get the style guide ready for the developers to reference. It's highly important in order to start any of the development work or strategize your components.

### Usual aspects of style-guide are

- Font sizes, family to be used
- Error/success message variations
- Toast messages variations
- Type of buttons
- Color palette (Branding)
- Form fields variations (Text, Checkbox, Radio, Switch, etc.)
- ..so on

# Technical Phase

## Bootstrap
What gives me the confidence to execute anything, in general, is breaking down things into smaller chunks and that is the case even with new tech or tech which I am confident with. If I have to give advice to someone on how to start a new project, I would say, sit down alone, think through and prepare a rough list of how would you want to break and execute. Define tasks and their outcomes.

And this is the first step I did!! 

## Setting up React native on local along with code versioning
As choosing a technology or a framework was a pre-requisite, setting up React native on local made sense. You might be thinking, what’s the big deal with that. There is NOT. 
It just gives a sense of achievement we kickstarted and it's not like you are not going to need it. 😉 

### Tasks to be done as part of setting up RN on local
- Set up a Github or Gitlab or bitbucket (Whatever you may like to use) with standard environment branches like development, staging, UAT & Production
- Setup the minimalistic React native application using RN CLI or Expo (I am not here to help you choose the one). But as a matter of fact, we chose RN CLI just because of the simplicity.
- Setup environment files (We used React native config package to use inside the application, it's pretty good).
- Add a basic Readme file with instructions for the team on how to run the app on local.
![readme](https://lhuria94.github.io/assets/img/2020-10-25-how-to-plan-and-execute-your-first-mobile-app-using-react-native/readme.png)

## Next step was...Enforcing linting using Pre-commit hooks, editor configurations 
This was really important, because when reviewing code; you will see a lot of indent issues, basic standards not being followed in the team. So, it makes sense to set it up in the first place and enforce it.

### Tasks to be done as part of enforcing standards
- Setup Linter and Prettier rules for the application
- Add a pre-commit hook with ESlint rules in place
- Define an editor config to be used by the team (Assuming we’re using VS code) 😉
![vsconfig](https://lhuria94.github.io/assets/img/2020-10-25-how-to-plan-and-execute-your-first-mobile-app-using-react-native/vsconfig.png)

## Decide on the directory structure
When you have a team working remotely, it's hard to have them follow the rules w.r.t structuring your components, files, directories, etc since React does not enforce any. So, sitting with the team and hear our how would they like to structure the application and why. Consolidate things, and define rules on what to call what, what to put where, etc. This worked perfectly for us and it went super smooth.

I have a short post specifically for this. Check it [out][directory-structure]

## Analyse essential libraries/packages to be used
When you are working on React/React-native or any other JS framework, one of the important decision is to decide on the libraries. From my experience, a single bad decision on choosing a library that is going to be widely used can end up as a complete app refactor. That’s something that happened to me, so I’d argue that you take your time, check the pros and cons of the library, compare it with others, and then decide.

### What we look for in a library
- Regular updates
- Open issues
- Community adoption & support
- Size
- Documentation

### Examples of most common use-cases for analysis
- Forms Library or Custom forms
- Styled components or SCSS or a mix of both
- Choosing Storybook
- File upload/picker
- UI library or Custom components/theme

## Setup basic Typography
Assuming that we have a style guide provided by the UI designer, the next step would be to analyze and come up with the list of re-usable typographies that will be used throughout the application.
This is necessary since you don't want the team to create the styles again and again when they feel the need.

### Example of Typography components
- Heading
- SubHeading
- Section
- Body
- Paragraph
- Link

## Setup Theme
When you are working on a mobile app, there is a good chance that you will need to take care of dark mode as well. 
For that, it's essential that we keep the strategy of plugging in modes as and when required.

### Tasks we did to make sure our app is ready for dark mode requirements
- Setup a theme provider
- Create both light.js and dark.js theme
- Setup the branding colors, fonts, basic spacers, etc.

# QA Phase

## Setup beta application
In order to set up the distribution means or link the application to a business entity, we would need an application setup in the App Store. Using which we will be able to get our application tested via Testflight or exporting an IPA/APK file respectively.

### Tasks to do here
- Setup test application for different environments
- Enable QA’s to download the app via Testflight
- Automate the build & distribution process via CI/CD service (e.g. App Center)

## Choose a Profiling tool
A profiling tool is necessary in order to look for potential bottlenecks during development. And this process should come as a part of your development cycle without worrying about the impacts/problems that might show up later.

# Business Phase

## Involve stakeholders for app submission info
Now, when you are in the phase of submitting your application, Apple will ask you a good amount of business information which you probably would not have the information handy. I’d suggest starting this conversation a bit early in the phase so there are no surprises or delays. That's something we did and which I feel was a smart decision.

### Example of what type of information would be required
1. Name of the application
2. Support URLs
3. Category of the application
4. Screenshots
5. Keywords
6. Description
7. Age Rating and so on...

That's all I had!

Thanks for reading. 😃

[directory-structure]: https://lhuria94.github.io/structure-react-native-project%20copy/
