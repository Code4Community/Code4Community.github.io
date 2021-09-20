---
layout: page
title: JavaScript Tutorial
permalink: /tutorials/js
content_style: github_markdown
---

# JavaScript Tutorial

By: [Max Gruber](https://github.com/maxdg99)

## Before we get started
* Complete the [HTML and CSS tutorial](./html-css)

## Overview
* [Part 1: Introduction](#introduction)
* [Part 2: Syntax](#syntax)
* [Part 3: HTTP Requests](#http-requests)
* [Part 4: Webpage Interaction](#webpage-interaction)
* [Part 5: Example](#example)
* [Part 6: Conclusion](#conclusion)

## Introduction

### Why do we need JavaScript?

Static webpages are great! Just as you saw in the HTML and CSS tutorial, we can make a pretty cool website with just HTML and CSS. However, as previously mentioned, those websites are *static*. What if we want *dynamic* webpages? What if we want users to be able to *interact* with our webpages? This is where JavaScript (JS) comes into the picture.

JavaScript is the programming language of the web. It allows us to react to user input from mice, keyboards, or other devices. Although knowledge of Java (or any other [procedural](https://en.m.wikipedia.org/wiki/Procedural_programming) programming language) will make it easier for you to learn JavaScript, it should be noted that **Java and JavaScript are *not* the same**. Now, with that out of the way, let's learn some JS!

## Syntax

JS looks pretty similar to other languages in the [C family of programming languages](https://en.m.wikipedia.org/wiki/List_of_C-family_programming_languages) like Java, C#, and C++. Do not let these similarities trick you! A snippet of JS code may look similar to Java while behaving quite differently.

### Variables

Variables in JS are created like this: `var myVar = 2`. Pretty cool, right? We do not need to declare the type of a variable in JS! If you think that is cool, check this out.
```javascript
var myVar = 2;
myVar = "Michigan Sucks";
myVar = 2.33;
myVar = [1, 3, 10];
```
Pretty crazy! In JS, variables can changes types on the fly as shown above.

### Types

In JS, types don't appear to be very important (which is a common criticism of the language). As you saw above, variables are not declared with specific types and their types be changed at runtime. This can cause some pesky bugs! For that reason, we recommend that you try to stick to one type per variable when possible. Now we will go over a few important types in JS.

#### Number

This one is pretty straightforward. JS Numbers can be [integers](https://en.m.wikipedia.org/wiki/Integer) (whole numbers, positive or negative) or [floating-point numbers](https://en.m.wikipedia.org/wiki/Floating-point_arithmetic) (numbers with fractional components).

#### Boolean

This one isn't too bad either. Booleans can be either `true` or `false`.

#### Array

Arrays in JS are very different from arrays in other programming languages. An empty array is created like this: `var myArray = []`. We can also initialize an array with values like this: `var myArray = [2, "cool string", 3.9, true]`. You may notice something odd here; JS arrays can contain multiple types!

Array values are accessed like this: `myArray[2]`. Since arrays are 0-indexed (meaning that the first element is at index 0), `myArray[2]` returns `3.9`.

Arrays can also serve as stacks, queues, and other similar data structures by using [methods like `pop()`, `push()`, `shift()`, and `unshift()`](https://www.w3schools.com/js/js_array_methods.asp).

#### String

In JS, you can write a String literal in single quotes (`'Hello, world!'`) or double quotes (`"Hello, world!"`). To get the length of a string, you can access its length property like this: `myString.length`.

#### Objects

JS Objects are also pretty different from Objects in other languages. A JS Object is created as follows:

```javascript
var team = {
    name: "Michigan",
    good: false,
    wins: 0,
    type: "College Football"
};
```

Objects are comma-separated key-value pairs. The keys are strings (like `name`, `good`, and `wins`), and the values are literals (like `"Michigan"`, `false`, and `0`) or variable names which evaluate to literals. For example, an object can contain another object or even an array! One major use case for JS Objects is in HTTP calls, but we will get to that later.

Object properties can be accessed like this: `team["type"]` or `team.type`. This would return `"College Football"`. To access a property of a sub-object, we can do something like this: `team["rival"]["name"]` or `team.rival.name`!

### Equality

Equality in JS can get a little tricky because variables are not strongly-typed. There are two equality operators in JS. `==` (double equals) is used to compare values and **not** types (if the values are the same, return `true`). `===` (triple equals) is used to compare values **and** types (if the values *and* types are the same, return `true`). If that doesn't make sense,check out the examples below. A good rule of thumb is to always use `===`!

* `"2" == 2` => true
* `"2" === 2` => false
* `3.9 == "3.9"` => true
* `3.9 === "3.9"` => false
* `"test" == "test"` => true
* `"test" === "test"` => true

### Control Structure

JS control structures are very similar to those in other programming languages. The code snippets below show examples of a few if statements. When the `condition` in parentheses is `true`, that code block runs. Otherwise, it checks the `condition` of the next code block.

```javascript
// if statement
if (condition) {

}

// if-else statement
if (condition) {

} else {

}

// Chained if-else statements
if (condition) {

} else if (condition) {

} else if (condition) {

} else {

}
```

### Loops and Iteration

#### For Loops

JS for loops are also very similar to those in other programming languages.

```javascript
for (var i = 0; i < 10; i++){

}
```

#### For...in Loops

For...in loops are used to iterate over the properties of an object. For example, if we have the following object:

```javascript
var team = {
    name: "Ohio State",
    nickname: "Bucks"
}
```

We can use a for-in loop to iterate through the object like this:

```javascript
var p;
for (p in team) {
    console.log(team[p]);
}
```

That code snippet would print "Ohio State" and "Bucks" to the console.

#### For...of Loops

For-of loops are for iterating over arrays. For example, if we have the following array:

```javascript
var teams = ["Michigan", "Ohio State", "Rutgers"]
```

We can use a for-of loop to iterate through the array like this:

```javascript
var p;
for (p of teams) {
    console.log(p);
}
```
That code snippet would print "Michigan", "Ohio State", and "Rutgers" to the console.

#### While Loops

While loops are the same as in other programming languages, so this will be brief. The syntax for while loops looks like this:

```javascript
while (condition) {
    ...
}
```

### Functions

Functions in JS are quite simple. You do not need to provide the return type or parameter types as you may in other programming languages. Functions will look something like this:

```javascript
function myFunction(param1, param2) {
    ...
    return param1 + param2;
}
```

## HTTP Requests

```javascript
// Call the initial functioi
fetch(url)
    // When we get a response back from the server, convert it to json
    .then(response => response.json())
    // When we are done converting to json, do something with it
    .then(response => {
        // Process the response
    });
```

## Webpage Interaction

Next up, we will talk about how you can react to user input through action listers and change what the user sees on the webpage through DOM manipulation.

### Action Listeners

One a webpage, we can add HTML elements such as buttons, dropdowns, input boxes, etc.  When the user interacts with these elements, we want to do things with their values.  We do this through action listeners. 

Suppose we want to write "Hello, world." to a 

## Example
https://dog.ceo/api/breeds/list/all
https://dog.ceo/api/breed/[BREED]/images/random

## Conclusion

We just went through a ton of information, and I do not expect any of you to be masters of JS by now.  While working on projects, use this page, w3schools.com, and stackoverflow.com as resources.  Moreover, you can always ask the leadership of C4C for help!

# Feedback

If you have any feedback for this tutorial, please [create a GitHub issue](https://github.com/Code4Community/Code4Community.github.io/issues/new) or talk to one of the leaders of C4C.
