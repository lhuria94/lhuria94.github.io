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


> Ah, it feels good to be back into blogging days 🤩. So, a little bit about what I’m up to these days; I am currently engaged in helping build an identity and access management solution for one of the projects. Now in IAM, there are a lot of things to cover but we will focus on the basics of it. While working on this piece, I have realized that the core concepts are often a gap in understanding with respect to what it actually means.  So, I am here to share the learnings in this post as per my experience. 

### What is IAM (Identity and access management)?
If we wanted to understand in simple words, let's break it down:
* **The first word is Identity ~** This, we can relate to the punch card attendance system. It's usually a flat and stiff paper and contains digital information, people just need to wave near a reader, and then ensures whether the correct person is logging in/out. Similarly, here it also means `verifying the user who they claim to be`.
* **Second is Access ~** This determines what level of access is provided to an individual. An easy way to understand is if you go to a nightclub/Casino, and there are guards taking care of who is allowed to come in, who can access the VIP area.
* **Third is Management ~** All of this falls under IT (Security) departments to manage the access control, policies, reporting, etc.

#### A little more about it:
*Identity and access management* also called *Identity Management system (IDMS)* in the enterprise is as crucial as anything these days and it's all about setting up standards and addressing the needs around enabling the right access at the right time for individuals to access not only IT resources but the hardware and applications employees require. It's often required to meet rigorous and complex security compliance requirements.

IAM’s pretty popular especially with enterprises as there is a critical need to manage information that is spread across internal and external applications with data security in mind. 

IAM’s core objective is to assign `one identity per individual` and have the ability to control it from one place which would help reflect in all systems. It also helps the ability to monitor user’s activities, permit user roles, enforce policies at org level which is an on-going process (basically handles authn (Authentication) and authz (Authorization)). 

### How IAM works?
IAM is designed to perform three things - 
- Identify
- Authn (Authentication)
- Authz (Authorization)

A lot of people gets confused b/w Authentication and Authorization, ill try to explain in a simplistic way:

* **Authentication:** When you enter a username/email & password into an application, the app tries to authenticate by checking the database and if the information which you entered matches; that means you are authenticated.

![authentication](https://lhuria94.github.io/assets/img/2020-05-25-what-is-iam/authentication.png)

* **Authorization:** This simply means the level of access. For example: If you log in to Facebook, you are allowed to see other’s profiles but not modify it.

![authorization](https://lhuria94.github.io/assets/img/2020-05-25-what-is-iam/authorization.png)

That being said, here are the core components of any IAM system:

* **Identity Management:** As the name suggests, it means managing every aspect of an individual’s identity. This includes managing Onboarding (provisioning), offboarding (de-provisioning), and on-going sync from the source to target systems/directories. And there are multiple identity protocols being used such as OAuth2.0, OIDC, SAML, LDAP, etc. For Identity management to happen, there are few building blocks required:
    1. **Source:** The origin of the individual (from where the identities originate) i.e kind of a directory of the personal data used to define individual users. This is usually done by looking at the applications which contain staff data to be the source of truth.
    2. **Central Repository:** For user’s information to be consistent b/w source and target system, syncing is essential. And for syncing to happen, it's important to have a central store that presents a logical view of the identities of an enterprise. It usually works by identifying a unique identifier basis to ensure that the provisioning, de-provisioning, updates are happening accurately.
    3. **Target:** These systems can be defined as any application being used which requires authentication and authorization. For example, company portals, mobile apps, etc.
* **Authentication:** Today, authentication does not only mean entering credentials and logging into a system but also making it secure by adding MFA, adaptive authentication.
* **Authorisation:** After authentication, the next step in any Identity and access management system comes is authorizing the users for assigned access to specific apps, resources based on the user’s provisioning.
* **Reporting:** This is all about recording, capturing user activities, auditing, monitoring, etc. This ultimately helps enterprises prove compliance with regulations, identify and address any potential security risks, and improve it further down the lane.
* **SSO:** This is my favorite, one the best ones. Keeping security in mind, it enhances the user experience a lot since the number of credentials an employee requires to access is automatically reduced. And it's much easier to control the user’s access from one place. I read somewhere, SSOs become SPOFs if not implemented correctly, and here too a centralized IAM system allows to control access more efficiently.

### Why do we need IAM?
1. **Security:** This is one of the core motives for any organization introducing IAM i.e controlling access which ultimately results in preventing identity theft, illegal access to sensitive information. It can also prevent unauthorized logins, protect against phishing attacks (and other cyber attacks). It also incorporates proper reporting, regardless of the application, platform, decide (Including BYOD options), helping with Location flexibility.
2. **Compliance:** IAM is not just about keeping things secure; intact following certain regulations according to the region is also crucial. So, compliance like HIPAA, PCI, GDPR, etc can be ensured since IAM specify strict protocols to control what and how of n/w and resources users can use. 
3. **Cost Reduction & Maintainability:** If there is any change to the organization-wide followed policy e.g. “Password Policy”, then with IAM, it can be done in one go. Hence reducing the workload of requests to the IT team to do it. Furthermore, it reduces Identity management costs like Onboarding, offboarding, implementing policies, processes, etc
4. **Improves User Experience:** IAM helps with implementing the “Single sign-on” feature which is really trending especially in enterprises. With SSO, the user does not need to enter passwords to access multiple systems.

### Must-haves before/during IAM implementation:
* I was reading one article about `the concept of putting all your eggs in one basket is a bit scary`. A centralized system may seem tempting but its also usually an opportunity for hackers and by putting dashboards, monitoring user’s activity closely will help prevent it.
* Working with legacy systems since most of the enterprises try to work it out but sometimes that’s not how it works with newer tech. Keeping the legacy systems alive with redundant workloads/tasks should be avoided as much it’s possible.
* Collaboration is important across different departments is necessary. Working with our stakeholders step by step with everyone’s buy-in help in the long run for taking crucial decisions.
* Multiple sources of identity information creates issues as well sometime, but the IAM system should be able to take care of that beforehand; synchronizing the identity across different systems.

That's all. If you would like to read more about it, I'd refer a few good links to go through:
* [The basic principles of Identity Management and Cloud adoption][ida]
* [What is IAM][varonis]

Thanks for reading. 😃

[ida]: https://www.identityandaccess.org/the-basic-principles-of-identity-management-and-cloud-adoption/
[varonis]: https://www.varonis.com/blog/what-is-iam/