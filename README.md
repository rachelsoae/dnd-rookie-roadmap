# D&D: The Rookie's Roadmap

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
2. Clone it down to your machine
3. `cd` into the directory
4. Run `npm install` to install required dependencies
5. run `npm start` to launch the application in your default browser

## Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
[Screenshot of Gameplay Basics Page]
[Screenshot of Half-Orc Page]
[Screenshot of Search]

## Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
- Solo Project
- Total Time to Complete: 35 hours over 6 days

### Tech:
- JavaScript
- React
- React Router
- React PropTypes
- Cypress
- Sass

## Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
- [Rachel Soae Prather](https://github.com/rachelsoae)
Thanks to [Ben Holden](https://github.com/BenHolden010) for help with code reviews

## Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
This project has been a fantastic exercise in working with RESTful APIs. [The API I used](https://www.dnd5eapi.co/docs/) was rich with information, but every subpage in the application - every ability, skill, race, class, and rule - is stored at an individual endpoint. This presented the challenge of accomplishing 58 fetch calls on page load and create states of arrays for each category without having timing issues. Needless to say, I learned a lot about useEffect (hint: don't forget your cleanup functions).

I also pushed myself to create a robust Cypress testing suite, utilizing custom commands to dynamically test every single link in the application.

## Plans For Future:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
I am super proud of how the app has turned out so far, but the more I work on it the more features I think of to add. One of the features I tried to implement, but ultimately had to roll back for the sake of time, was the addition of a "Related Links" bar. On each content page, if any abilities, skills, or rules are referenced on that page, I wanted to provide a section of "related links" so the user can seamlessly navigate from one subject to another. That is at the top of the list of features I would like to add. Here are a few others:

- Add a loading page to account for loading those 58 fetch calls over slower networks
- Combine AbilitySkill, RaceClass, and Gameplay into a single Directory component that dynamically renders sections
- Update styling to include images, including background images
- Make the "active" tab (Home, Glossary, etc.) change colors
- Add anchor links for the headings in some of the longer pages, especially the rules