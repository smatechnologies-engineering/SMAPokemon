# Pokemon App

Recommended time: 1-3 hours.

## This codebase is a mess.

There are a lot of things to do in this app. Below are some user stories you can choose from, or you can choose to find your own. There are easter eggs everywhere.

This app uses a lot of fun things. Take a look at the `package.json`

---

**RECOMMENDED VSCODE EXTENSIONS:** eslint and prettier

**TIPS:** best thing you can do is play with it a bit and fix all the things that bother you :).

---

### User Stories

#### App wide

- Using material ui add the logo as a header image, consider all the pages it has to show up on.
- There are two pages, Pokemon Search and Pokedex right now we can't navigate to either. Add a navigation.
- Create a home page, sky's the limit!
- There are currently minimal tests and our coverage is bad. Add some tests!
- Some of the other developers keep pushing code that isn't prettified or linted. Can you think of a solution for this?
- And many many more... try to catch them all!

#### Pokemon Search

- The page is very badly designed at the moment. Create a visual harmony with the layout.
- We are overflooding the API with calls at the moment. Find a solution for this.
- There are way too many re-renders in our search page (fake form functionality), perhaps we can limit the re-renders to just our input somehow?

#### Pokedex

- There is FOUC when loading the page. Figure out a way to avoid having the user see unstyled content.
- Right now the performance on this page is fine, although it could get crazy as we get more Pokemon. Consider adding a feature to allow for the expansion of this page.
- There are way too many calls to the API happening here. Try to offload some of the work to our service worker API.

## When you're done.

Make a PR request to this repo with your submission!
