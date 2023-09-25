# D&D: The Rookie's Roadmap
## [Enter Site Here](https://dnd-rookie-roadmap.vercel.app)
![preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVlbTNianpybmE5cmo0enJsYWo3aHA1dDZzd2g0MzJuMmFieW9zYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fRA14DmnPW3Sh6gHMY/giphy.gif)

## Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This app is a wiki for complete newbies to Dungeons & Dragons and similar role-playing games. The content is broken into a few main categories:
- Gameplay Basics (Spellcasting, Adventuring, Combat, and Ability Scores)
- Abilities & Skills
- Races & Classes

There is also a Glossary page with a comprehensive list of links to all sub-pages, which can be filtered, and a Resources page with external links to more information folks might find useful.

The app has been fully E2E UI tested and is responsive across large, medium, and small screen sizes.

Happy Adventuring!

## Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository
1. Clone it down to your machine
1. `cd` into the directory
1. Run `npm install` to install required dependencies
1. run `npm start` to launch the application in your default browser

### To Run Test Suite:
1. Run `npm cypress open`
1. Select E2E Testing
1. Select the test spec you wish to run

## Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
- Created by [Rachel Soae Prather](https://github.com/rachelsoae)
- Thanks to [Ben Holden](https://github.com/BenHolden010) & [Laura Garcia Guerra](https://github.com/lauraguerra1) for help with code reviews
- Total time to complete initial publication: 35 hours over 6 days

### Tech:
![JavaScript][JavaScript]
[![React][React]][React-url]
[![Sass][Sass]][Sass-url]
[![Cypress][Cypress]][Cypress-url]

## Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
This project has been a fantastic exercise in working with RESTful APIs. [The API I used](https://www.dnd5eapi.co/docs/) was rich with information, but every subpage in the application - every ability, skill, race, class, and rule - is stored at an individual endpoint. This presented the challenge of accomplishing 58 fetch calls on page load and create states of arrays for each category without having timing issues. Needless to say, I learned a lot about useEffect (hint: don't forget your cleanup functions).

I pushed myself in many ways on this project. In addition to navigating the huge API, I set up a robust Cypress testing suite, utilizing custom commands to dynamically test every single link in the application, and implemented styling with Sass for the first time.

EDIT: Since first publishing this application, I have enormously refactored it to fetch only the desired information on the load of each content page. This has had great effects on performance of the application; while a greater number of loading states are needed and utilized throughout, only information that is pertinent to the user is fetched. The hardest part of doing it this way is choosing a cute loading state 🌻

## Plans For Future:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
I am super proud of how the app has turned out so far, but the more I work on it the more features I think of to add. One of the features I tried to implement, but ultimately had to roll back for the sake of time, was the addition of a "Related Links" bar. On each content page, if any abilities, skills, or rules are referenced on that page, I wanted to provide a section of "related links" so the user can seamlessly navigate from one subject to another. That is at the top of the list of features I would like to add. Here are a few others:

- Create a single, dynamically rendered, Directory component
- Update styling, including subject matter images, background images, and active tab styling
- Add anchor links for pages with large amounts of content

[JavaScript]: https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[React]: https://img.shields.io/badge/React-%2361DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://react.dev/
[Sass]: https://img.shields.io/badge/Sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=white
[Sass-url]: https://sass-lang.com/
[Cypress]: https://img.shields.io/badge/Cypress-%2317202C?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://docs.cypress.io/guides/overview/why-cypress
