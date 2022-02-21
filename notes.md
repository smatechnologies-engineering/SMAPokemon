# Notes

Just some notes I wanted to type up while doing this coding challenge.

## What would I like to do?

- make a header with some links so that I can move around better
- use react context to persist data

## package-lock.json

- [stack overflow page discussing this a bit](https://stackoverflow.com/questions/64813775/is-there-any-way-to-fix-package-lock-json-lockfileversion-so-npm-uses-a-specific)
- [documentation on lockfile](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json)

Before starting this project I updated my node and npm versions to the latest version. My npm is on 8.4.1 and node is on 17.5.0. It seems like going from npm version 6 to 7 causes the lockfile to change a bit so there is a new `packages` field in the lockfile along with some minor updates so I'm guessing the current lockfile was generated using an npm version earlier than 7. For this coding challenge I did not want to push up a bunch of changes in the package-lock.json, however if this were a real project we were working on I'd discuss with the team these changes and whether we should upgrade our npm version to the latest. Also recommend talking about establishing specific npm and node versions or at least a range of versions.

## Header

I would like a header with navigation links so that I can move around the app better. There is a material ui header so I figured I'd use that.

## Home Page

Add a small home page.

## Integration Tests

I created some integration tests. I figured I'd ensure the right pages were displayed for each url, the header navigation links work and that the search page can successfully search for pokemon. I also added some data-qa attributes to easily get elements.

## Miscellaneous Things

- lint rule to make unused imports an error

