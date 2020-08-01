---
layout: page
title: Git Tutorial
permalink: /tutorial-1
content_style: github_markdown
---
# Tutorial XYZ: React and JSX

By: Anden Acitelli

Reviewed by: 

## Prerequisite Knowledge

**Required Knowledge**
- JavaScript: React is written in JavaScript. You will have to at least have the syntax down to understand React. I also recommend you know HTTP Requests and the array functions JavaScript offers (especially `map`) which are used very frequently throughout JSX. 

**Recommended Knowledge** 
- HTML/CSS: While not really a prerequisite to actually work with React, especially the parts where we interface with the backend, you will want to understand how to do Front-End Design with HTML/CSS, otherwise much of the templating and front-end specific stuff will be much more challenging. 

## Setup

To use React, you will need:
- [Node](https://nodejs.org), which is likely already installed as part of previous tutorials
- npm (node package manager), which comes installed with Node.

## Overview

- [Part X: What Are React and JSX?]()
- [Part X: Set Up And Run A React Application]()

- [Part X: React Components]()
- [Part X: React Templating For The Front-End]()
- [Part X: JSX Bits and Pieces]()
- [Part X: Mindup-Specific React Details]()

- [Part X: Optional Topics to Learn]()

<!--
- [Part 1: Getting A Basic React App Working](#part-1-about-git)
- [Part 2: Cloning a Repository](#part-2-cloning-a-repository)
- [Part 3: Making Modifications](#part-3-making-modifications)
- [Part 4: Commit and Push Your Changes](#part-4-commit-and-push-your-changes)
- [Part 5: Pull Request](#part-5-pull-request)
-->

## What Are React And JSX?

### React 

[React](https://reactjs.org/) is a JavaScript framework developed and maintained by Facebook and a group of open-source developers. It is generally regarded as the most popular web development framework, but is rivaled by Angular and Vue. There is great reading out there about the differences between them and the advantages of each, but that is beyond the scope of this tutorial. 

Here is a "Hello, World" React page: 

```javascript
import React from 'react'
class HelloWorld extends React.Component {
    render() {
        return <h1>Hello, Mindup Contributor!</h1>
    }
}
```

### JSX 

JSX is cool, but isn't anything to be afraid of. JSX is essentially version of HTML used by React that lets you do a lot of JavaScript stuff right in the middle of it. It is big enough that it is mentioned separately in this tutorial, but much smaller in scale and importance than React overall. 

For example, the following `render` function shows how you can pull values from JavaScript and display them right on the page without needing any DOM Manipulation, which you'd need to do if you weren't using React:

```javascript
render() {
    let listElementsToShow = ["Element 1", "Element 2", "Element 3"]
    let pageTitle = "Mindup!"
    return (
        <div>
            <h1>{pageTitle}</h1>
            <ul>
                {listElementsToShow.map(element => {
                    return (
                        <li>{element}</li>
                    )
                })}
            </ul>
        </div>
    )
}
```

## Set Up And Run A React Application

### Set Up A Baseplate React Application

Setting up a baseplate react application that you can use to figure out how React works, and just tinker with it, is very easy.

Just execute the following line of code in a terminal:

```bash
npx create-react-app <name of project>
```

This line uses npx (a part of npm that runs commands) to run `create-react-app`, which creates a directory with the name of your project and populates that directory with the baseplate react application itself. 

### Run A React Application

To run the application, ensure you are in the application's base directory. For example, if you ran `npx create-react-app sample-project`, ensure you are in the `sample-project` directory. 

Then, run the following line in the terminal: 

```bash
npm run start
```

What the command `npm run <command>` does is go to the `package.json` file, go to the `scripts` section, and runs whatever corresponds to the command there. In our case, it just starts up React's development server and opens your browser to the page that it is running on. You will generally always want to run `npm run start` from the directory that your `package.json` is in accordingly. 

In context to Mindup, to run the front-end development server, you will run `npm run start` from the `frontend` directory.


## React Components

React offers templating - The ability to duplicate the same bit of code across multiple sections while being able to edit it all in one place - and a whole lot of other stuff via **components**. 

There are two types of components - Regular components, and stateless functional components.

### Regular Components

A "regular" component is React's "base" component. This allows you to hold state (variable values, etc.) and should be used wherever we need to any sort of user authentication or track the state of something (i.e. buttons being pressed, etc.) 

A regular component `.js` file looks like the following: 

```javascript
import React from "react"
class Welcome extends React.Component {
  render() {
    return <h1>Hello, Mindup Contributor!</h1>
  }
}
```

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

Feedback
====

If you have any feedback on this tutorial, feel free to create an issue on the Github repo, or let one of the exec board members (@maxdg99, @adambricelis, @ndrewh) know.