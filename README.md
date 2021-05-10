# react-miniproject
first of many react apps: pupster, tinder-like app for puppies
---
# Pupster App

In this activity we will work to create an entire React application from scratch, complete with routing and AJAX requests to the [Dog Ceo API](https://dog.ceo/dog-api/): an API for dog images.
```
├>npm
│[x] axios+bootstrap+ReactRouter 
├>public
│└index.html
│[x] cdn fontawesome
└>src
 ├pages
 │[x]about
 │[x]search
 │[]discover
 │ 
 ├components
 │[] Search Form
 │[] Search Results
 │[] Result List
 │[] Nav Tabs
 │    
 ├App.js
 │    
 └index.js
  [x] import bootstrap
   ```

### Instructions
---
- [x] -   Start by scaffolding out a new starter React app by running the following command in your terminal `npx create-react-app pupster`.

- [x] -   cd into the `pupster` directory and run the following command to install React Router, Axios, and Bootstrap:

- [ ] - This activity uses Bootstrap, so make sure you `import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js`

- [ ] - Recommended:** Add the Font Awesome CDNs to your application's `index.html` file:

  
- [ ] -  Open [https://pupster.netlify.com/](https://pupster.netlify.com/) in your web browser and take a few moments to study the example application. You will be basing your Pupster app off of this example.
- [ ] -  This example contains 3 routes:

    - [ ] -  `/about`: A static welcome screen for visitors to the application.

    - [ ] -  `/discover`: This page displays a photo of a random dog retrieved from the [Dog Ceo API](https://dog.ceo/dog-api/). This page contains 2 clickable buttons: one for passing or "thumbs-downing" a dog, and one for picking or "thumbs-upping" a dog. When either button is clicked, a new dog image is loaded from the API. If you "thumbs up" a dog, there is a 1 in 5 chance that the dog likes you too, and the friends count goes up by 1.

    - [x] -  `/search`: This page allows you to search the [Dog Ceo API](https://dog.ceo/dog-api/) for all dogs by breed. After a search is made, a list of all of the results appears underneath.

- [ ] -  Your Pupster app should implement each of these three pages and their basic functionality, **don't spend much time styling your app until you have completed everything else.**

- [ ] -  Your Pupster app should display a navigation bar that is present on every route.

- [ ] -  Begin with routing. For each route, render a different component for each page without worrying about building in any behaviors yet. Then work on implementing the most basic functionality for each page, one piece at a time.

# Bonus

- [ ] -  Once you complete all of the basic functionality for this activity, work on adding additional styles and making it look great.

### Hints

- [ ] -  Don't worry about styling or making things fancy at first. Just use Bootstrap classes and get the basic functionality for each page working. Get the app to work first, then come back and make it awesome.

- [ ] -  Use the <https://dog.ceo/api/breeds/image/random> endpoint to get a random dog image.

- [ ] -  Use the <https://dog.ceo/api/breed/hound/images> endpoint (replace "hound" with your breed of choice) endpoint to get an array of all available dog images of the selected breed.

- [ ] -  See <https://dog.ceo/api/breeds/list> for a list of all available dog breeds. You can test the `/search` page by searching for any of the breeds returned by this endpoint.

- [ ] -  Utilize documentation if you're still unsure about how anything works: 

  * [React Router](https://reacttraining.com/react-router/web/guides/philosophy)

  * [React](https://facebook.github.io/react/docs/hello-world.html)

  * [Dog Ceo](https://dog.ceo/dog-api/)

---


![react badge][badge]


[badge]: https://raw.githubusercontent.com/attila5287/img_readme/main/new/react_badge_256.png
 "react logo"




| ![dev]( https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg "dev-icon") | About Developer | 
| -------------   | -------------: |
| Repos | [github.com/attila5287 ](https://github.com/attila5287/) |
| Profile | [ attila5287.github.io ](https:///attila5287.github.io/) |
| Email    |  atiturkoz@hotmail.com | 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 


   ![react logo][react]

[react]: https://raw.githubusercontent.com/attila5287/img_readme/main/new/react_256.png
 "react logo"
