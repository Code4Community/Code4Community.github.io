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
* [Part 2: JavaScript Syntax](#javascript-syntax)
* [Part 3: HTTP Requests](#http-requests)
* [Part 4: Webpage Interaction](#webpage-interaction)
* [Part 5: Example](#example)
* [Part 6: Conclusion](#conclusion)

## Introduction

### Why do we need JavaScript?

Static webpages are great. Just as you saw in Adam's HTML & CSS tutorial, we can make a pretty cool website with just HTML & CSS. That said, what if we want our website to well... do things?! This is where JavaScript (or JS for short) comes into the picture.

JavaScript is a scripting language for the web.  JS helps us take in user input, process it, and react to it.  It is worth noting that **Java and JavaScript are not the same thing *or* similar** for that matter.  Java and JavaScript are very different coding languages with vastly different use cases. That said, any experience with Java or any other programming language will help you learn JS quickly. Now, with that out of the way, let's learn some JS!

## JavaScript Syntax

Many of the features of JS will look very similar to other languages that you may know.  Though the similarities do sometimes exist, do not let this trick you!  Sometimes a JS code snippet make look the same as Java for example, but it may behave very differently!

### Variables

Variables in JS are created like this: `var myVar = 2`.  Pretty cool, right?  We do not need to declare the type of a variable in JS!  If you think that is cool, check this out.
```javascript
var myVar = 2;
myVar = "Michigan Sucks";
myVar = 2.33;
myVar = [1, 3, 10];
```
Pretty crazy!  In JS, variables can changes types on the fly as shown above.

### Types

In JS, types seem to take a backseat (which is one of the many criticisms of the language).  As you saw above, variables are not given a specific type and can be changed at any point.  This causes some hard to find bugs!  That said, there are only a few important types in JS.

#### Number

This is a very straight forward type.  JS Numbers can be Integers, Floats, or Doubles.

#### Boolean

This is very straight forward as well.  Just true or false!

#### Arrays

Arrays in JS are very different than what you are used to in other languages.  An empty array is created with `var myArray = []`.  We can also initialize an array object with `var myArray = [2, "cool string", 3.9, true]`.  You may notice something odd here; JS arrays do not have to be restricted to only one type! Arrays can be accessed with normal indices (meaning that they are 0 indexed) such that `myArray[2]` would return 3.9.  Moreover, Arrays can serve as stacks, queues, and other similar data structures with the methods listed [here](https://www.w3schools.com/jsref/jsref_obj_array.asp).

#### String

There is nothing too complicated here either.  To define a string we can simply do `var myString = "look ma, I made a string!"`.  To get the length of this string, we would simple say `myString.length`.

#### Objects

This is where things tend to diverge from other languages.  JS Objects are somewhat similar to C structs.  A JS Object is created with the following code:

```javascript
var team = {
    name: "Michigan",
    good: false,
    wins: 0
};
```

As we can see, objects are comma separated key-value pairs.  The values can be any JS datatype or method.  For example, an object can contain another object or even an array!  One use case for JS Objects is as the return type of HTTPS REST APIs, but we will get to that later.

JS object properties can be accessed like this: `sport["type"]` or `sport.type`.  This would return "College Football".  To access a property of a sub-object, we can do `sport["ball"]["shape"]`!

### Equality

Equality in JS can get a little tricky since variables are not strongly-typed.  There are two types of equal signs in JS. `==` (double equals) is used to compare equality **and ignore** type. `===` (triple equals) is used to compare equality **and** type.  If that makes no sense, check out the examples below.  A good rule of thumb is to always use `===`!

* `"2" == 2` => true
* `"2" === 2` => false
* `3.9 == "3.9"` => true
* `3.9 === "3.9"` => false
* `"test" == "test"` => true
* `"test" === "test"` => true

### Control Structure

Conditional Structures are very similar to what you may be used to in other languages.  The code snippets show examples of a few if structures.

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

These For loops act the same as For loops in Java and other languages.

```javascript
for (var i = 0; i < 10; i++){

}
```

#### For In Loops

For-In loops are for iterating through the properties of an object.  For example, if we have the following object:

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

#### For Of Loops

For-Of loops are for iterating over arrays.  For example, if we have the following array:

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

While loops work the same way as they do in other languages, so this will be brief.  The syntax for while loops looks like this:

```javascript
while (condition) {
    ...
}
```

### Functions

Functions in JS are quite simple.  You do not need to provide the return type or types of the parameters as you may need to in other languages.  Functions will look something like the following.

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
