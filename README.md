# The Dyrt Tech Challenge

You just started working for a new agency. You have to take over a project for a company called "The Dirt" (with an "i"). A prior coworker made some progress on the project but left things half finished. Your first task is making the app feature complete.

## App Description

"The Dirt" wants a single page app where you can search for a campground, select that campground, and view some basic information about the campground. They are a very new company and going to pilfer the data from their direct competitor "The Dyrt".

## Completed Requirements

1. Data is loaded from The Dyrt's autocomplete endpoint as a user types a query into the search input.
2. Each time a user's mouse enters the dropdown menu an analytics event is logged with an updated list of the results.
3. When a user selects a campground from the dropdown menu, the campground is loaded and some basic information is displayed.

### Installation

1. Clone the repo
2. Ensure the [Yarn Package Manager](https://yarnpkg.com/getting-started) is installed globally
3. Run `yarn install`
4. Run `yarn start`

### Extra Credit to look for

1. Added Typescript.
2. For all asynchronous actions, added loading and error states.
3. Implemented a copied debounce hook on search for a more smooth user experience. 
4. Testing suite of critical functionality.

### Future next steps:

1. Add testing for all components.
2. Init eslint & clean code.

## Screenshot
<img width="948" alt="Screen Shot 2022-10-02 at 1 38 03 PM" src="https://user-images.githubusercontent.com/28467245/193472991-714a526b-00f8-4a58-9f11-e22a891e3028.png">
