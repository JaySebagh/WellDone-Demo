# Well-Done 

You can find the deployed project at [Well-Done](https://well-done-demo.vercel.app/).

## Contributors

|                                                      [Jean-Francois Sebagh](https://github.com/jaysebagh)                                                       |                                                       [Josh Diamond](https://github.com/Josh-Diamond)                                                        |                                                      [Andrew Brudnak](https://github.com/brudnak)                                                       |                                                       [Joshua Wood](https://github.com/Joshua-Wood39)                                                        |                                                      [Maksim Vakarchuk](https://github.com/maks112v)                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="./assets/pfp/Jean-Francois.jpeg" width = "200" />](https://github.com/jaysebagh) | [<img src="./assets/pfp/Keslar.jpeg" width = "200" />](https://github.com/) | [<img src="./assets/pfp/Andrew.jpeg" width = "200" />](https://github.com/brudnak) | [<img src="./assets/pfp/Wood.jpeg" width = "200" />](https://github.com/Joshua-Wood39) | [<img src="./assets/pfp/Maksim.jpeg" width = "200" />](https://github.com/maks112v) |
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jaysebagh)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Josh-Diamond)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/brudnak)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Joshua-Wood39)                           |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/maks112v)                            |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jean-francois-sebagh)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/joshua-keslar)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/andrew-brudnak)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/joshua-wood-full-stack)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/maks112v)                |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/React-v16.9.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-v9.0.4-blue)
![Prismic](https://img.shields.io/badge/Prismic-%5E2.1.1-yellow)
![Emotion](https://img.shields.io/badge/Emotion-%5E10.0.16-ff69b4)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://welldone.netlify.com/)

## Project Overview

[Trello Board](https://trello.com/b/LH0NslAb/labs-15-well-done)

[Product Canvas](https://www.notion.so/WellDone-068de827be164b9e814b636f9f36bef2)

[Design Files](https://www.notion.so/Provided-Resources-69cce05e6bce4db9ab54857538725dc4)

A dashboard application to allow an NPO and it's clients to monitor current water pump statuses in Cambodia.

* Built a server side rendered React application using Next.js

* Utilized Hooks to manage state.

* Setup a headless CMS using Prismic.

* Utilized Emotion for lightweight styling.

An important aspect of this dashboard was making sure that it was as lightweight as possible for fast rendering, as well as limited requests to the endpoint.

### Key Features

- Overview of pump statuses
- Full in-depth information about individual pumps
- Access reports for onsight technicians
- Lightweight
- Easy to scale without touching code

## Tech Stack

### Front end built using:

#### _React.js / Next.js_

- Automatic code splitting, doesn't load unecessary code.
- Simple client-side routing.
- Server Side Rendering for faster page loads.

#### _Emotion_

- Requires no additional setup.
- Lightweight, only loads visible css rather than everything.

#### Front end deployed to [Well-Done](https://frontend-git-master.welldone.now.sh/).

### CMS built using:

#### _Prismic_

- Easy to use.
- Scalable
- Doesn't require touching code, allowing stakeholders to add new pumps quickly.


# Content Licenses


| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| Icons    | kamijin-fanta   | [License](https://github.com/react-icons/react-icons/blob/master/LICENSE) |


# Installation Instructions

* Clone repo and install dependencies `npm i`
* Run development `npm run dev`

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
