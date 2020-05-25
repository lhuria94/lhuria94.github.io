---
layout: post
title: "What is IAM? (A beginner's guide)"
date: 2020-05-25 00:00:00
image: '/assets/img/2020-05-25-what-is-iam'
description: ''
main-class: 'iam'
tags:
- iam
- architecture
- security
- cloud
- authentication
- authorization
categories:
- IAM
- Authentication
- Authorization
twitter_text: "What is IAM? (A beginner's guide)"
cover_image: '/assets/img/2020-05-25-what-is-iam/cover.png'
---


> Ah, it feels good to be back into blogging days 🤩. So, a little bit about what I’m upto these days; I am currently engaged in helping build an Identity and access management solution for one of the project. Now in IAM, there are lot of things to cover but we will focus on basics of it. While working on this piece, I have realised that the core concepts are often a gap in understanding with respect to what it actually means.  So, I am here to share the learnings in this post as per my experience. 

### What is IAM (Identity and access management)?
![cover](/assets/img/2020-05-25-what-is-iam/cover.png)
If we wanted to understand in simple words, lets break it down:
* **The first word is Identity ~** This, we can relate to punch card attendance system. It's usually a flat and stiff paper and contains digital information, people just need to wave near a reader, and then ensures whether the correct person is logging in/out. Similarly, here it also means `verifying the user who they claim to be`.
* **Second is Access ~** This determines what level of access is provided to an individual. Easy way to understand is like if you go to a nightclub/Casino, and there are guards taking care of who is allowed to come in, who can access VIP area.
* **Third is Management ~** All of this falls under IT (Security) departments to manage the access control, policies, reporting etc.

#### A little more about it:
*Identity and access management* also called *Identity Management system (IDMS)* in enterprise is as crucial as anything these days and it's all about setting up standards and addressing the needs around enabling the right access at the right time for individuals to access not only IT resources but the hardware and applications employees requires. It's often required to meet rigorous and complex security compliance requirements.

IAM’s pretty popular especially with enterprises as there is a critical need to manage information which is spread across internal and external applications with data security in mind. 

IAM’s core objective is to assign `one identity per individual` and have the ability to control it from one place which would help reflect in all systems. It also helps ability to monitor user’s activities, permit user roles, enforce policies at org level which is an on-going process (basically handles authn (Authentication) and authz (Authorization)). 

### How IAM works?
IAM is designed to perform three things - 
- Identify
- Authn (Authentication)
- Authz (Authorization)

A lot of people gets confused b/w Authentication and Authorization, ill try to explain in simplistic way:

* **Authentication:** When you enter a username/email & password into a application, the app tries to authenticate by checking the database and if the information which you entered matches; that means you are authenticated.

![authentication](/assets/img/2020-05-25-what-is-iam/authentication.png)

* **Authorization:** This simply means level of access. For example: If you log in to Facebook, you are allowed to see other’s profile but not modify it.

![authorization](/assets/img/2020-05-25-what-is-iam/authorization.png)

That being said, here are the core components of any IAM system:

* **Identity Management:** As the name suggests, it means managing every aspect of a individual’s identity. This includes managing Onboarding (provisioning), off boarding (de-provisioning), and on-going sync from the source to target systems/directories. And there are multiple identity protocols being used such as OAuth2.0, OIDC, SAML, LDAP etc. For Identity management to happen, there are few building blocks required:
    1. **Source:** The origin of the individual (from where the identities originate) i.e kind of a directory of the personal data used to define individual users. This is usually done by looking at the applications which contains staff data to be the source of truth.
    2. **Central Repository:** For user’s information to be consistent b/w source and target system, syncing is essential. And for syncing to happen, its important to have a central store which presents a logical view of identities of an enterprise. It  usually works by identifying unique identifier basis to ensure that the provisioning, de-provisioning, updates is happening accurately.
    3. **Target:** These systems can be defined as any application being used which requires authentication and authorisation. For example, company portals, mobile apps etc.
* **Authentication:** Today, authentication does not only mean entering credentials and logging into a system but also making it secure by adding MFA, adaptive authentication.
* **Authorisation:** After authentication, next step in any Identity and access management system comes is authorising the users for assigned access to specific apps, resources based on the user’s provisioning.
* **Reporting:** This is all about recording, capturing user activities, auditing, monitoring etc. This ultimately helps enterprises prove compliance with regulations, identify and address any potential security risks and improve it further down the lane.
* **SSO:** This is my favourite, one the best ones. Keeping security in mind, it enhances the user experience a lot since the number of credentials an employee requires to access is automatically reduced. And its much easier to control the user’s access from one place. I read somewhere, SSOs become SPOFs if not implemented correctly and here too a centralised IAM system allows to control access more efficiently.

### Why do we need IAM?
1. **Security:** This is one of the core motive for any organisation introducing IAM i.e controlling access which ultimately results in preventing identity theft, illegal access to sensitive information. It can also prevent unauthorised logins, protect against phishing attacks (and other cyber attacks). Also incorporates proper reporting, regardless of the application, platform, decide (Including BYOD options), helping with Location flexibility.
2. **Compliance:** IAM is not just about keeping things secure; intact following certain regulations according to region is also crucial. So, compliance like HIPAA, PCI, GDPR etc can be ensured since IAM specify strict protocols to control what and how of n/w and resources users can use. 
3. **Cost Reduction & Maintainability:** If there is any change to the organisation wide followed policy e.g. “Password Policy”, then with IAM, it can be done in one go. Hence reducing the workload of requests to the IT team to do it. Furthermore, it reduces Identity management costs like Onboarding, offboarding, implementing policies, processes etc
4. **Improves User Experience:** IAM helps with implementing “Single sign on” feature which is really trending especially in enterprises. With SSO, user does not need to enter passwords to access multiple systems.

### Must haves before/during IAM implementation:
* I was reading one article about `the concept of putting all your eggs in one basket is a bit scary`. Centralised system may seem tempting but its also usually an opportunity for hackers and by putting dashboards, monitoring user’s activity closely prevents any attack.
* Working with legacy systems since most of the enterprises try to work it out but sometime that’s not how it works with newer tech. Keeping the legacy systems alive with redundant workloads/tasks should be avoided as much it’s possible.
* Collaboration is important across different departments is necessary. Working with our stakeholders step by step with everyone’s buy-in help in long run for taking crucial decisions.
* Multiple sources of identity information creates issues as well sometime, but the IAM system should be able to take care of that beforehand; synchronising the identity across different systems.

That's all. If you would like to read more about it, I'd refer few good links to go through:
* [The basic principles of Identity Management and Cloud adoption][ida]
* [What is IAM][varonis]

Thanks for reading. 😃

[ida]: https://www.identityandaccess.org/the-basic-principles-of-identity-management-and-cloud-adoption/
[varonis]: https://www.varonis.com/blog/what-is-iam/