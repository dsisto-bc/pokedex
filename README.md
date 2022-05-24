# Pokedex clone 👾

This test consists of buildign a pokedex clone.

A pokedex is a fictitious object that lists information about pokemons. Pokemons are small animal-like monsters (poket-monster) that user collected and battle against other pokemons, taken from the [Pokemon game serires](<https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)>). You'll need to consume [Pokeapi](https://pokeapi.co/) to make a paginated list of pokemons, with a detail page and a mocked "add pokemon" feature.

The goal of this project is to make an example of how you work. We are not looking for a perfect implementation, we'll get to chat about the project in the next interview. It's intented to be built within a week without full dedication.

# Scope

It must have a paginated list of all pokemon. Clicking on one of them must render a details page of a pokemon. It should have an "add pokemon feature" that doesn't use the API.

We are intentionally vague on some details to leave room for you to build whatever you think its best.

You must work in a public git repository.

While design is not the main focus in this project, we do apreciate a nice design. But please don't spend too much time here.

Have a Readme.md with running instructions and decitions you have taken (specially around adding a pokemon). If blocked, reach out to dsisto at blockchain dot com.

## Nice to have features

-   responsiveness
-   error handling
-   testing

---

Author: Bruno Morales

## How to run the app:

-   Make sure Node is installed (https://nodejs.org/es/download/)
-   Clone the repository by running in terminal:

```
git clone https://github.com/BrunoMorales/pokedex.git
```

-   and move to the created directory (pokedex)

-   Add dependencies and build running in your terminal:

```
yarn
yarn build
```

-   Finally, open locally the app by running

```
yarn start
```

If you run yarn start while build is still running, all changes in the code will be automatically updated and loaded into the server.

I was able to deploy a demo version of the app to Netlify in https://blockchain-pokedex.netlify.app/ , but routing doesnt work and styles break in desktop details page. Plus manual navigation and page refreshing is not allowed, so you'd be missing my not very beautiful but responsive 404 page and wouldnt be able to refresh and click the browser back/next button, which CAN be done in my app as locally tested.

I tried to deploy to github pages too, but something causes the app to only open the readme.

///////\\\\\\\

# Author's note:

With the little time I was able to put effort in this project (Including long nights and working weekends, plus my current job) I feel frustrated to not have been able to show all I can do.

I decided to use as few standard pre-building libraries as possible, so I didnt use create-react-app nor Node.js; and configured webpack and babel myself.

I was left with no time to add the form for entering a new pokemon, although I know how to do it (Both without libraries and with. I prefer Formik). I would've created a redux store and use that as a main source of data, so instead of loading api responses into component states I wouldve done it once and added it to the local store, where new entries could easily be added and tagged. This way, the first time the user enters all API calls could be done concurrently and then it would all be locally stored,

I could've created an express backend server to handle all of this faster and more securely, with more options for deployment, and being able to create an executable node app that would serve the server locally with just a click on a file, plus adding server side rendering.

I lacked time to add Jest and Enzyme test on all my components, but at least I could write most of them on TS. Also cypress for E2E testing.

Wouldve liked to add Google Analytics for tracking as well.

I found several tutorials and guides to create a pokedex using the pokeapi. However, this interview is intended to prove what Im capable of doing and thinking, not of following tutorial steps, so I ignored them completely. Only reference I used to get something "out of the box" is the box-shadow styles I could find in this gallery: https://getcssscan.com/css-box-shadow-examples, and some app examples for styling (Which I didnt follow anyway, as you can see my styles are not similar to anything on the internet)

And last and least, I think my code is pretty clean but I wouldve loved to have some time to clean it up and leave it all shiny a pretty for you to read.

All in all, with 2 desirables (I didnt really handle errors but at least I logged them, so I half count it) and a requirement missing, I am only left with the gratitude you provided me by being interested in me and allowing me to test my skills.

/////

## As an explanation to what WAS done:

I decided to use a modular folder arquitecture because I find it always easier to find anything related to what Im working on (I dont need to go to the styles folder to search for a specific file, or the tests folder for a specific test). All is in a single package, and if I know Im working on a component, I also know the styles, translations, related components, tests, types and even redux actions are all together next to each other, I dont need to look for them. Additionally, creating a new component is a copy paste from another which creates a boilerplate to easily create everything required by the component; and deleting a comopnent doesnt require you to labyrinth away all the distributed code when it is structured by function instead of component.

I decided to use TS to

1. Show that I can. Always useful when showing skills to be able to write JavaScript Improved (TS).
2. Giving everything a type is not only useful for myself as a developer while I work, because it allows me to notice unexpected value returns, for instance. Its also useful for a new deveolper (Or 5 yr older me) to understand exactly what is what and returns what.
3. In SCSS, its easy to avoid overlapping with other classes by wrapping them in a class that will be only used by the component root. So even if two components (mainPage and profilePage) use the same class in a button (.nice-button), it would still not overlap because one would be only found in .main-page-wrapper { .nice-button {...}} while the otherone would only be found in .profile-page-wrapper { .nice-button {...}}. If a single class is required for several components, it can always be declared in an upper scope (Though except for globals like my basic-button example I would not recommend this because of unexpected results)

# Final note:

If you have any feedback at all to give, even as a form of PR with comments and corrections, I would be most grateful since it would help me improve my coding quality and tactics.

Once again, thank you for the opportunity and hope to listen from you soon.

### Bruno Morales
