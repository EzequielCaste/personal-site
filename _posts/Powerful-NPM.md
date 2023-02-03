---
title: 'Powerful NPM'
excerpt: 'The npm command-line utility has many more features that may come in handy when working on your projects.'
date: '2023-02-03T05:35:07.322Z'
---

# Powerful NPM

NPM is one of the first tools or command-line utitiles that developers learn to use but most of us just learn the basic commands like `npm install` or `npm run start`. However, there are more things you can do with npm than just installing packages and starting your application.

Let's start from the definition.

## What is NPM?

Node Package Manager is an online repository for publishing open-source Node.js projects. It also has command-line tools to help you install packages and mange dependencies. 

## Useful commands

- npm test - to run your tests
- npm build - to build your project
- npm start - to run your project locally

## Check for outdated packages

The reason for this blog post is to share my experience with **npm** and how it helped me solve an issue with outdated packages. 

A few months ago I decided to go back to one of my projects and add a new feature. So I cloned the repository, installed packages with `npm install`, started up the project but it did not start. I read through the error message and figured out it had something to do with a version number of one the packages. After some trial and error, google searching I found this **npm** command that can be very useful in similar cases.

## npm outdated

If you run `npm outdated` in the root of your project, it will show you a list of the installed packages like this:

![List of installed packages](/images/Powerful-npm/outdated.png)_List of installed packages_

### What do these color represent?

- 🔴 Red 🔴 means there's a newer version matching your semver requirements, so you should update now.
- 🚸 Yellow 🚸 indicates that there's a newer version about your semver requirements (usually new major, or new 0.x minor) so proceed with caution.

### Did you say SEMVER?

Yeah, **semver** stands for Semantic Versioning. For example: 

`MAJOR.MINOR.PATCH` > `1.0.3`

Be careful when updating packages, because some changes can cause incompatibilites. A change in the **MAJOR** version number has incompatible changes. A change in the **MINOR** version has new backward-compatible features. And lastly, a **PATCH** version number update includes backward-compatible bug fixes.

![The more you know](/images/Powerful-npm/the-more-you-know.webp)_The more you know!_

--- 

Ok, so now that you have the list of outdated packages it's time to update them.

## npm update

This command will update all the packages to the latest version respecting the semver constraints. The easy way of updating all packages is by running the command: `npm update`. Have in mind that this will not update to **MAJOR** versions. In the case you want to update a specific package to the latest version, even to the latest MAJOR version, use `npm install package-name`.


---


## Credits & References

[npm Docs](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)

[npm outdated](https://docs.npmjs.com/cli/v9/commands/npm-outdated)

