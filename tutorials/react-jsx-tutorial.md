---
layout: page
title: React / JSX Tutorial
permalink: /react-jsx-tutorial
content_style: github_markdown
---
# Tutorial: React and JSX

By: Anden Acitelli

Reviewed by: 

## Prerequisite Knowledge

- **JavaScript:** You don't need to be an expert, but you need to understand the syntax of JavaScript to understand React. The JavaScript tutorial completed previously is recommended if you are unfamiliar, and you should skim it over even if you already familiar.
- **HTML/CSS:** You will need to understand HTML to understand JSX (explained later), and you will need to understand CSS to understand SCSS (explained later). React itself requires neither, but you will want to have a good foundation to understand it all together.


## Setup

To use React, you will need:
- [Node](https://nodejs.org), which is likely already installed as part of previous tutorials
- npm (node package manager), which comes installed with Node.

## Overview

### What Does This Tutorial Cover?

This tutorial is intended to get a new Code 4 Community up to speed with what they need to know in order to start contributing code to the Mindup! application. The skills necessary are taught through a webapp you will be building concurrently with the tutorial, with screenshots included at the end of each section so that you can verify that your code works as intended.

### Outline

- [Part 1: What Are React and JSX?](#part-1-what-are-react-and-jsx)
- [Part 2: Set Up And Run A React Application](#part-2-set-up-and-run-a-react-application)

- [Part 3: React Components](#part-3-react-components)
- [Part 4: JSX Bits and Pieces](#part-4-jsx-bits-and-pieces)
- [Part 5: Mindup-Specific React Details](#part-5-mindup-specific-react-details)

- [Part 6: Optional Topics to Learn](#part-6-optional-topics-to-learn)
- [Part 7: Other Resources](#part-7-other-resources)

## Part 1: What Are React And JSX?

Before we get into making your own application, a little background information is helpful. 

### React 

[React](https://reactjs.org/) is a JavaScript framework developed and maintained by Facebook and a group of open-source developers. It is generally regarded as the most popular web development framework, especially at smaller companies, but is rivaled by Angular and Vue. There is great reading out there about the differences between them and the advantages of each, but that is beyond the scope of this tutorial. 

As a taste of what's to come, here is a "Hello, World!" page in React: 

```javascript
import React from 'react'
class HelloWorld extends React.Component {
    render() {
        return <h1>Hello, Mindup Contributor!</h1>
    }
}
```

### JSX 

JSX is a version of HTML used by React that lets you plug JavaScript variables directly into the HTML. This is what enables React to do implicit DOM Manipulation. If you don't know what that means, that's fine, but if you're curious, look up "JavaScript DOM Manipulation"; React does that all for us.

## Part 2: Set Up And Run A React Application

### Set Up A Baseplate React Application

Setting up a React project from scratch manually is difficult, but React has an easy way to create a basic application with all the core functionality needed to take away all that overhead.

To do this, simply verify `npm` is installed and execute `npx create-react-app test-app` in a terminal. As a reminder the hotkey to toggle VSCode's integrated terminal is `Ctrl + Tilde` (`Tilde` is the character above `Left Tab`).

This line uses npx (an npm-related service that is installed with npm) to run `create-react-app`, which is a preregistered command that creates a directory with the name of the third parameter (i.e. `test-app` above) and populates that directory with the baseplate React application itself. It will likely take a few minutes; That is expected.

After it finishes, if you open the folder (`test-app`) for the application in VSCode, it should look like the following: 

![](../images/react-jsx-tutorial/AfterCreateReactApp.png)

### Run A React Application

To run the application, first ensure you are in the application's base directory. This will usually be the directory with `package.json` in it. Then, run `npm run start` in a terminal.

You will then see some terminal output, which is React starting the development server (which lets us hot-reload code without having to refresh the browser) and then loading our project into it. If you did everything right, you should see something like this:

![](../images/react-jsx-tutorial/AfterNPMRunStart.png)

What the command `npm run <command>` does is go to the `package.json` file, go to the `scripts` section, and runs whatever corresponds to the command there. There's some weird stuff that goes in with environment variables (which is why straight-up running these commands instead of doing it through `npm run start` often doesn't work) but that's beyond scope of this tutorial.

### Exploring The Parts Of Our Application

We start in our base directory. `node_modules` is all the JavaScript prerequisites that React has. `public` generally holds any pictures we use. `src` holds all our code, which we will go more in-depth into momentarily. `package.json` holds information about our projects npm dependencies and associated scripts. `package-lock.json` holds information about the versions of prerequisites our project can run on.

Inside the `src` directory, which is generally all that front-end people will change, there are some important parts. `index.js` is the very first file that React tries to run. We generally never edit this. This file includes `App.js`, which is the "base" of our entire application. In context to Mindup, this is where we do routing, meaning it's where we make the decision to display certain pages ("components") when the user is at certain URLs. 

Any other files are either related to styling, or are beyond the scope of this application. Looking them up is sure to give you useful knowledge, but they haven't really been a part of the project up to this point.

## Part 3: React Components

It's time to get into the meat of React! React, like most other broadly-scoped web frameworks, offers templating - The ability to duplicate the same bit of code across multiple sections while being able to edit it all in one place. It does this via **components**. You can view a component as a section of a page that has its own Layout (the HTML), Styling (the css), and Behavior (the JavaScript).

Each component gets its own JavaScript file. You can technically create multiple in one file, similar to how you can often declare multiple classes in the same file in a lot of Object-Oriented Languages, but it's not generally recommended at all from a maintainability standpoint, and is no different in our case.

### Creating Our First Component 

### Regular Components

A "regular" component is React's "base" component. This allows you to hold state (variable values, etc.) and should be used wherever we need to any sort of user authentication or track the state of something (i.e. buttons being pressed) 

A regular component `.js` file looks like the following: 

```javascript
import React from "react"
class Welcome extends React.Component {
  render() {
    return <h1>Hello, Mindup Contributor!</h1>
  }
}
```

First, we import React, something that always needs to happen. Then, we create a component called `Welcome` that inherits behavior from React's master `Component` class. Classes defined this way, inheriting from `React.Component`, need a `render()` function, which returns the JSX that we want this component to display. If the JSX looks a little weird, don't worry about it. It's covered later.

### Stateless Functional Components

A "stateless functional" component is similar to a regular component, but cannot hold state. These are frequently used whenever you just need the front-end part of something, which is frequently the case for us. However, as we shift over to Redux and keeping track of login state, we will likely start 

The only actual improvement stateless functional components have over regular components is that they are faster to render. A regular component can do everything a stateless functional component can, but has more functionality (and therefore takes a bit longer to render and has a little more overhead). 

A stateless functional component's `.js` file looks like the following: 

```javascript
import React from "react"
function Welcome(props) {
  return <h1>Hello, Mindup Contributor!</h1>;
}
export default Welcome
```

This function will look the exact same as the normal component version. 

An important note - Inside the return statement of either the function (if stateless functional) or the render function (if regular), you need to have one div (doesn't have to be a div tag) that everything is in. You can't do something like the following: 

```javascript
function render() {
    return (
        <h1>Page Name</h1>
        <p>Page Text</p>
    )
}
```

This is invalid because there is not one root tag. You could do the following, though: 

```javascript
function render() {
    return (
        <div>
            <h1>Page Name</h1>
            <p>Page Text</p>
        </div>        
    )
}
```

### Using Components in Other Classes

What can make components very powerful is the ability we have to essentially copy-paste components multiple times across different sections, but only have to edit them in one place (i.e. templating). For example, we only define the Navbar component in one place, but we use it across every single one of our pages, so it saves us a lot of work whenever we need to change it. 

The following files illustrate how you'd go about using components to replicate a Navbar across several pages, while only having one Navbar component:


**File: Navbar.js**

Just act like appropriate CSS is applied to make this actually look like a Navbar. 

```javascript
import React from "react"
function Navbar() {
    return (
        <ul>
            <li><a href="">Page 1</a></li>
            <li><a href="">Page 2</a></li>
            <li><a href="">Page 3</a></li>
            <li><a href="">Page 4</a></li>
        </ul>
    )
}
export default Navbar
```

**File: Page1.js**
```javascript
import React from "react"
import Navbar from "./Navbar"
function Page1() {
    return (
        <div>
            <Navbar />
            <h1>Page 1</h1>
        </div>
    )
}
export default Page1
```

**File: Page2.js**
```javascript
import React from "react"
import Navbar from "./Navbar"
function Page1() {
    return (
        <div>
            <Navbar />
            <h1>Page 2</h1>
        </div>
    )
}
export default Page1
```

**File: Page3.js** 
```javascript
import React from "react"
import Navbar from "./Navbar"
function Page1() {
    return (
        <div>
            <Navbar />
            <h1>Page 3</h1>
        </div>
    )
}
export default Page1
```

You can see how, despite being a basic concept, this allows a ton of templating possibilities, and ensures way better Single Point of Control throughout the entire codebase.

In fact, this is how the MindUp page works.

### Props 

In order to pass data in between components, you use something called `props`. Both types of components can use props; It's not just a regular component thing. 

For example, say we want a component that lists the name of a specific part of the Mindup! team and reasons for working with that part of the team. We could define the component like so, to use a prop that was passed into the component:

```javascript
import React from "react"
function Subteam(props) {
  return (
      <div>
        <h1>Hello, {props.name}!</h1>
        <ul>
            {props.languagesUsed.map(element => {
                return (
                    <li>{element}</li>
                )
            })}
        </ul>
      </div>
  )
}
export default Subteam
```

If you haven't seen `map()` before, it just iterates over an array, and in our case, we get a `<li>` element for each array element.

And then we'd call it from another component like so (assuming the component file is in the same level; If it's different, you just need to change the file path in the import): 

```javascript
import React from "react"
import Subteam from "./Subteam"
function SubteamsList(props) {
    let subteam1Name = "Front-End"
    let subteam1LanguagesUsed = ["HTML", "CSS", "React"]
    let subteam2Name = "Back-End"
    let subteam2LanguagesUsed = ["Node.js", "Express", "MongoDB", "Mongoose"]
    return (
      <div>
        <Subteam name={subteam1Name} languagesUsed={subteam1LanguagesUsed} />
        <Subteam name={subteam2Name} languagesUsed={subteam2LanguagesUsed} />
      </div>
  )
}
export default Subteam
```

As you can see, this allows us to still share the same component, but change up some text in each instance of the component.

### Applying CSS to a Component

Applying CSS to a component is fairly simple. Instead of doing a `<link rel="...">` like you'd do in normal HTML, you can simply import it like you'd import a component: 

```javascript
import React from "react"
import "styles.css"
function componentExample() {
    return (
        <div>Sample Text</div>
    )
}
```

As long as you have your selectors right, that css will only apply to this <div> tag and anything inside of it, similar to a <body> on a normal HTML page.


## Part 4: JSX Bits and Pieces

JSX, as a refresher, is the same as normal HTML, except it allows some JavaScript in it. This section will go a little more in-depth as to how this actually works. 

You usually only use JSX either inside the return statement of a `render()` function of a normal React component, or in the return statement of the only function in inside a stateless functional component. I'm not sure it's even legal to use elsewhere, but I've not researched it so I won't state that as a hard rule.

JSX is super intuitive and shouldn't take long to get used to, so this section won't be super long. 

### The Basics

The most basic thing you might use JSX for is if you want the text of an HTML tag to be the value inside a JavaScript variable:

```javascript
function component() {
    var textToDisplay = "Hello, World!"
    return (
        <div>{textToDisplay}</div>
    )
}

```

Essentially, whenever you want to be typing out any JavaScript variables (or JavaScript in general) inside JSX, you put it inside curly brackets. *The page will automatically update the HTML if the value of that JavaScript variable changes*. That is, for those who have worked with the HTML DOM before, updating that is all done automatically by React. 

**Please note that the parenthesis after the return HAS to be on the same line as the return statement.** Otherwise, as JavaScript does automatic semicolon insertion, it will automatically place a semicolon right after the return statement, meaning we return nothing and entirely ignore the actual JSX.

Also, commenting is weird with JSX. You have to either wrap a block comment (`/* */`) inside curly brackets, or put your comments before the return statement. Generally, we work with small enough components and the code is organized enough that it's usually more readable to put any important comments before the return statement, but with bigger, more complicated components, the other approach may be more maintainable. We don't enforce one way or another, just something to keep in mind. 

A slightly more complicated use case might be if you want to display an array:

```javascript
function component() {
    var listOfElements = ["Element 1", "Element 2", "Element 3", "Element 4"]
    return (
        <ul>
            {listOfElements.map(element => {
                return (
                    <li>{element}</li>
                )
            })}
        </ul>
    )
}
```

For this, we use JavaScript's `Array.map()` function, which takes every element of an array and essentially calls a function with it as the argument. You can return JSX from that function, so you essentially return a list element of actual HTML for every list element inside our JavaScript array. 

Also of note here is that we are using an arrow function (`(param1, param2, ...) => {}`). Arrow functions are essentially interchangeable from what I remember with React, but there's some cases where one is better than the other for JavaScript in general. I believe was discussed in the previous JavaScript tutorial, though it's easy to look up "JavaScript difference between arrow and regular functions".

That's honestly about as complicated as JSX gets in context to our project. There may be some small changes to make when it comes to displaying the state of a component (i.e. `this.state.variable` or however it goes), but those two use cases should really be all we need. 


## Part 5: Mindup-Specific React Details

This section contains anything you need to know about the Mindup! project's React configuration.

### Running our App

Just run `npm run start` (or `yarn start` if using yarn) in the `frontend` directory to run the application. This will start up the react server. The pages will automatically change when you make changes to the codebase and save it. 

### Folder Setup

Our project setup isn't that different from the base `create-react-app`. All our code is inside `src`. Each page on the website is a react component, and is placed in the `pages` directory. The rest of the components follow the same general structure; Just look around the folder structure and it should be pretty apparent. 

### CSS Structure

Each component has its own css file, for styling we want to only be applied to that specific page, and we also have a universal css file that applies to every page (for things like color schemes or other universal styles we want to use). You should edit the component-specific CSS file unless you are making a design change that is across several different components or something, in which case you should either make a new css file for those few, or if it's big enough just do it in the universal file. 

### SCSS

SCSS (Pronounced "sass") is a css framework we use. It is a language that compiles into CSS, but if we write in SCSS, we are able to do cool stuff like nest selectors inside of each other, and the SCSS compiler takes care of translating those into actual CSS that the browser can read. 

SCSS barely adds anything onto the base project, so it's not worth a big section. A few things you should know, though. 

You will want an automatic compiler for this that turns the .scss files you change into .css files. From vscode, search up the extension "Live Sass Compiler" (by Ritwick Dey, incase there's multiple) and install it. At the beginning of each development session, to enable transpiling from .scss to .css, just hitt he button "Watch Sass" in the bottom right of your screen and it will automatically compile everything when it sees changes.

The only real tutorial section we need is a quick demonstration. Say we have this .scss:

```scss
#pageBase {
    margin: 10px;
    padding: 10px;
    .subsection {
        margin: 20px;
        padding: 5px;
    }
}
```

This would be compiled into something like the following (pure CSS the browser understands):

```css
#pageBase {
    margin: 10px;
    padding: 10px;
}

#pageBase > .subsection {
    margin: 20px;
    padding: 5px;
}
```

In this case, SCSS just "un-nests" everything while keeping all the selectors. The inner code has higher specificity in either case. The two above samples of code are entirely equivalent, though the browser itself can only understand the bottom one. 

The compiler also generates a .map file. All this does is allows the browser to translate the line in the generated CSS file to a line in your SCSS file. So, if you want to look in your developer tools for the line of SCSS that is causing a change, this allows you to do that, instead of having to look at that line in the CSS and manually find where that was generated from in the SCSS. 

We also do CSS variables easier with SCSS (for things like colors). We will implement this at the beginning of the year; It's easy enough to understand when you see it. Other than that and the nesting syntax, that's about all we use SCSS for. 

### Network Requests

To send HTTP requests to the backend, we use `fetch()`. We primarily use this to send `GET` and `POST` requests. 

The basic syntax for a `GET` request is the following: 

```javascript
fetch("/api/details")
.then(response => response.json())
.then(data => { console.log(data) })
```

The basic syntax for a `POST` request is similar, but we need to supply a body:

```javascript
let body = { data1: "Hello", data2: "World!" }
fetch("/api/details", {
    method: 'POST', 
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => { console.log(data) })
```

You may possible have to change some other options, though the URL, method, and body are the three "necessary" ones. You can view a better description of all this at the [MDN Docs Page](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

You can also check out our login/signup/passwordreset form on the MindUp Repository [here](https://github.com/Code4Community/Mindup/blob/frontend/frontend/src/pages/loginSignup/LogInSignUp.js) (scroll to the bottom). This component is unique because we essentially template all three of those pages off of one signup, and pass in a bunch of props, but in terms of network requests, it isn't anything special.

## Part 6: Optional Topics to Learn

This section is intended to list the things that you don't need to learn to contribute to the core of the project, but we will likely end up using. These are all well-used in the industry so you would be well-suited to figure out how they work regardless. 

The following fit the above description:
- **Redux** is something we plan to build in near the beginning of the year to handle state (e.g. being logged in)
- **Jest / React testing** is something we will start working with this near the beginning of the year. 
- **React Lifecycle Hooks**, to my understanding are a cleaner way to do a lot of stuff with React. We will probably end up working with them eventually. 

## Part 7: Other Resources

Odds are, if you've done any programming before, you should be well versed in doing a lot of googling, so I doubt this section will be very useful, but here's some resources I'd recommend if you need clarification on anything:

- **The Mozilla MDN Docs** are really good. If they have a page on the topic I almost always look at that first.
- **React's official documentation** is also very good.

Feedback
====

If you have any feedback on this tutorial, feel free to create an issue on the Github repo, or let one of the exec board members (@maxdg99, @adambricelis, @ndrewh) know.
