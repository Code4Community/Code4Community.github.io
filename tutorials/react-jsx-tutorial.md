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

- [Part X: The Parts I Don't Feel Qualified Enough To Teach]()
- [Part X: Redux (To Be Written At A Later Date)]()

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

Feedback
====

If you have any feedback on this tutorial, feel free to create an issue on the Github repo, or let one of the exec board members (@maxdg99, @adambricelis, @ndrewh) know.
