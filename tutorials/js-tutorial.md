---
layout: page
title: JavaScript Tutorial
permalink: /javascript-tutorial
content_style: github_markdown
---

# JavaScript Tutorial

By: [Max Gruber](https://github.com/maxdg99)

## Before we get started
* Fulfill the [prerequisites of the HTML & CSS tutorial](https://code4community.github.io/tutorial-2/#before-we-get-started)
* Complete the [HTML & CSS tutorial](https://code4community.github.io/tutorial-2)

## Overview
* [Part 1: Introduction](#introduction)
* [Part 2: Basic JavaScript Syntax](#basic-javascript-syntax)
* [Part 3: HTTP Requests](#http-requests)
* [Part 4: Asynchronous JS](#asynchronous-js)
* [Part 5: The DOM](#the-dom)
* [Part 6: Conclusion](#conclusion)

## Introduction

### How to use this tutorial.

This tutorial is quite long, and it is understandable if you cannot get through the entire thing.  You can also use this tutorial (in addition to Google and the leadership team) as a reference while working on your projects.

### Why do we need JavaScript?

Static webpages are great. Just as you saw in Adam's HTML & CSS tutorial, we can make a pretty cool website with just HTML & CSS. That said, what if we want our website to well... do things?! This is where JavaScript (or JS for short) comes into the picture.

JavaScript is a scripting language for the web.  JS helps us take in user input, process it, and react to it.  It is worth noting that **Java and JavaScript are not the same thing *or* similar** for that matter.  Java and JavaScript are very different coding languages with vastly different use cases. Now, with that out of the way, let's learn some JS!

## Basic JavaScript Syntax

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

In JS, types seem to take a backseat (which is one of the many criticisms of the language).  As you saw above, variables are not given a specific type and can be changed at any point.  This cause some hard to find bugs!  That said, there are only a few important types in JS.

#### Number

This is a very straight forward type.  JS Numbers can be Integers, Floats, or Doubles.

#### Boolean

This is very straight forward as well.  Just true or false!

#### Arrays

Arrays in JS are very different than what you are used to in other languages.  An empty array is created with `var myArray = []`.  We can also initialize an array with object with `var myArray = [2, "cool string", 3.9, true]`.  You may notice something odd here; JS arrays do not have to be restricted to only one type! Arrays can be accessed with normal indices such that `myArray[2]` would return 3.9.  Moreover, Arrays can serve as stacks, queues, and other similar data structures with the following methods.

##### Array Methods and Properties

* length
    * Note: length is a property not a method.
* T pop()
    * Removes and returns the last item in the array.
* Number push(T x)
    * Adds x to the end of the array. Returns new length.
* T shift()
    * Removes and returns the first item in the array.
* Number unshift(T x)
    * Adds x to the front of the array. Returns the new length.
* See all other array methods at [w3schools](https://www.w3schools.com/jsref/jsref_obj_array.asp).

#### String

Strings are as simple as "myString"!  We can access strings just like arrays, so if `var myArray = ["test", false, 3]`, `myArray[1]` would return false.

#### String Methods and Properties

* length 
    * Note: length is a property, not a method, meaning if you declare a string `var str = "Hello!"`, you would get the length via `str.length`, not `str.length()`. 
* See all other string methods at [[w3schools](https://www.w3schools.com/js/js_string_methods.asp).

#### String Concatenation and Interpolation

Strings can be added together like this: "Go" + "Bucks" => "Go Bucks".

#### Objects

This is where things tend to diverge from other languages.  JS Objects are somewhat similar to C structs.  A JS Object is created with the following code:

```javascript
var team = {
    name: "Michigan",
    good: false,
    wins: 0
};
```

As we can see, objects are comma separated key-value pairs.  The values can be any JS datatype or method.  For example, an object can contain another object or even an array!  Below in a more complex example.

```javascript
var sport = {
    type: "College Football",
    ball: {
        shape: "oval",
        material: "leather"
    },
    teams: [
        {
            {
                name: "Michigan",
                good: false,
                wins: 0
            },
            {
                name: "Ohio State",
                good: true,
                wins: 1000
            }
        }
    ],
    printTeam: function () {
        console.log("Go Team!");
    }
}
```

JS object properties can be accessed like this: `sport["type"]` or `sport.type`.  This would return "College Football".  To access a property of a sub-object, we can do `sport["ball"]["shape"]`!  Properties that are methods can be called with `sport["printTeam"]()`.

We can, also, make constructors for objects.  Below is an example of a constructor and how to use it.

```javascript
function Team(name, sport, season) {
    this.Name = name;
    this.Sport = sport;
    this.season = season;
}

var BlueJackets = Team("Blue Jackets", "Hockey", "Winter");
```

Then, BlueJackets.Sport would return "Hockey".

#### Equality

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

JavaScript has switch statements syntactically similar to other languages, but we will not go over them here.

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

#### Anonymous Functions

Anonymous Functions are functions that do not have a name, so they cannot be called by name.  Anonymous Functions can be passed as parameters into functions, set as property values in objects (as we saw before), etc.  There are two ways to create an anonymous functions; both are shown below.

```javascript
myMethod(function(param1, param2) {
    return param1 + param2;
});

myMethod((param1, param2) => {
    param1 + param2
});
```

`myMethod` in this example is just an arbitrary method that takes in a function as one of its parameters. If you're coming from other languages where passing functions into another function isn't really a thing, just know that it absolutely is a thing in JavaScript and comes up frequently.

### Let's Start Writing Some Code!

Alright, now that we know the basic JS syntax we can get to writing some code! Through out the remainder of this tutorial, we will be adding the current temperature of each OSU campus on the HTML page created in the HTML & CSS tutorial.

Open up your HTML file from the HTML & CSS tutorial.  Then, add `<script></script>` after the `<body>` tag ends but before the `<html>` tag ends.  For the purposes of this tutorial, all of our JS will go in the script tags.  For what its worth, we could also make a .html file and put `<script src="myscripts.js"></script>` in the `<head>`, but we will not do that here.

First, we need to create an array of objects that holds the name of each campus, latitude, and longitude.  Below is a list of the latitudes and longitudes for each campus, see if you can figure out how to make an array of objects before you look at the solution!

* Columbus
    * Latitude: 40.0067
    * Longitude: 83.0305
* Lima
    * Latitude: 40.7373
    * Longitude: 84.0283
* Mansfield
    * Latitude: 40.7989
    * Longitude: 82.5779
* Marion
    * Latitude: 40.5804
    * Longitude: 83.0915
* Newark
    * Latitude: 40.0581
    * Longitude: 82.4013
* Wooster
    * Latitude: 40.8051
    * Longitude: 81.9351

Ok, great!  This is what you should have thus far.

```javascript
<script>
var campuses = [
    {
        name: "Columbus",
        lat: "40.0067",
        lon: "-83.0305"
    },
    {
        name: "Lima",
        lat: "40.7373",
        lon: "-84.0283"
    },
    {
        name: "Mansfield",
        lat: "40.7989",
        lon: "-82.5779"
    },
    {
        name: "Marion",
        lat: "40.5804",
        lon: "-83.0915"
    },
    {
        name: "Newark",
        lat: "40.0581",
        lon: "-82.4013"
    },
    {
        name: "Wooster",
        lat: "40.8051",
        lon: "-81.9351"
    }
];
</script>
```

Great, now that we have our array of objects, we need to iterate through it and handle the data.  Take a minute, and see if you could just worry about the loop to iterate through the data.  Don't worry about processing the data for right now.

Alright, well since we need to loop through an array, we will need to use a for-of loop.

```javascript
var campus;
for (campus of campuses) {
    // Process Data
}
```

We could also use a basic for loop and use indices, but the above method is much more readable and has less performance overhead. Generally, you should use `for-in` if you don't need the index.

Now that we have the loop figured out, we will need to process that data and get the weather for those areas.  This is where our API comes into play!

## HTTP Requests

An HTTP Request is a way to get data from a server.  Essentially, a server provides a url where you can either get data from or give data to.  In order to get the data we want and for the server to know who we are, we need to pass some information along with our request.  There are many types of HTTP requests, but we will be dealing with GET requests for the purposes of this tutorial.  If you would like to learn more about the basics of HTTP, you can check out this (article)[https://www.tutorialspoint.com/http/http_requests.htm].

The API we will be calling today is this (FCC Weather API)[https://fcc-weather-api.glitch.me/].  In order to make a request to the FCC Weather API, we need to provide our latitude and longitude.

Though there are several ways to make HTTP requests in JS, we will be using the most modern and simple method, `fetch()`.  Just understand that you may see other methods in the wild!  Other options can be specified with the fetch() function.  These options can be viewed (here)[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch].  When no options are given, the default is a GET request.  A GET request is simply requesting data from a server.

```javascript
// Call the initial function
fetch(url)
    // When we get a response back from the server, convert it to json
    .then(response => response.json())
    // When we are done converting to json, do something with it
    .then(response => {
        // Process the response
    });
```
A lot of the code above may appear scary or confusing, but you can ignore a good part of it.  You will begin to understand more of it as you Google answers to your questions while working on projects!

Now, we need to set this up to send our weather API calls.  It will probably be most efficient to write a function that takes our campus objects and makes the API call.  What do you think this will look like?

Though there may be a few solutions here, this is what I came up with.  The data returned from the GET request is a JS object (you can see the object on the API page). We just need to get the temperature from the object as we would access any object.  Moreover, the returned temperature is in Celsius, so we need to convert it to Fahrenheit.

```javascript
function getWeather(campus) {
    var url = "https://fcc-weather-api.glitch.me/api/current?lat="+ campus["lat"] +"&lon=" + campus["lon"];
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            var temp = response["main"]["temp"];
            temp = (temp * 9/5) + 32;
        });
}
```

I know that the above code may look scary, but you do not need to understand all of it right now.  All you need to understand is where the url goes and where to handle the response data!

Now we need to call this function in a loop and iterate over all of the campuses. Not too difficult, right? You should end up with the following.

```javascript
var campus;
for (campus of campuses) {
    getWeather(campus);
}
```

## Asynchronous JS

Javascript is fundamentally a language that makes asynchronous code very easy to write. For example, if we make two requests with `fetch()`, JS will not wait until the first request returns before making the second one.  This can be very helpful when dealing with many http requests so that our code does not get slowed down.  The asynchronous nature of `fetch()` is why we need to use the `.then()` syntax.  This syntax waits until the HTTP response is returned in order to execute the code.  This code that is executed after an HTTP request (or after any asynchronous action for that matter) is commonly referred to as a callback.  

The `fetch()` function returns a promise.  A promise in JS is very similar to a promise in real life.  It says I promise to get you the data, but I am still figuring that out right now, here is a promise instead.  Once the HTTP response is returned, the response will be in the promise.

We can make our own functions asynchronous with the `async` and `await` keywords.  All `async` functions return a promise, but it is worth noting that an `async` function with no `await`'s will run synchronously.  I understand that this section may seem very confusing.  Once you get to working on your projects and Googling your questions, this will make a lot more sense!

Below is a brief example of these keywords in use.  I encourage you to check out (this article)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function] to gain a better understanding of these keywords

```javascript
async function myFunc() {
    await 1
}
```

## The DOM

### Editing the HTML of the DOM

Great!  Now we have most of our weather thingy working.  Now all we have to do is inject the temperature that we get from the API into the HTML.  This is done with something called DOM Manipulation.  The DOM, or Document Object Model, is an object that represents the HTML page in JS, and by working with it through certain methods, we can edit parts of the HTML based on things we have in JavaScript.

We can find elements in our HTML page by assigning id's to some elements and using the following method call:  `var element = document.getElementById("id");`.  We can also find elements by other methods such as by class or tag name, but we will just ID here. We can then edit the HTML that is inside the returned element with `element.innerHTML = "some html"`.  That said, there is a better way when we are adding multiple child listItems to our list parent.  We can create a new node element and then append it to the list!  Check out the example below:

```javascript
// Assume that we have list with id = "list"

var node = document.createElement("LI");
var textNode = document.createTextNode("This is the text in our list item");
node.appendChild(textNode);
document.getElementById("list").appendChild(node);
```

The first thing that we need to do in order to add campuses to our HTML page is add an id to the `<ul>` element. In order to do this, replace `<ul>` with `<ul id="campuses">`. Also, remove all of the `<li>` elements from the list. Your file now should look like the following:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ohio State</title>
        <style>
            body {
                background-color: #fff7f7;
            }
            h1, h3 {
                color: #666;
            }
            img {
                float: right;
                height: 100px;
            }
            #main-campus {
                color: #bb0000;
            }
            .regional-campus {
                color: green;
            }
            p {
                color: gray;
            }[]
            #band-info {
                color: black;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>
            THE Ohio State University
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/150px-Ohio_State_University_seal.svg.png" alt="University Seal">
        </h1>
        <p>The Ohio State University (commonly Ohio State or OSU) is a public research university in <a href="https://www.columbus.gov/">Columbus, Ohio</a>. Founded in 1870 as a land-grant university and the ninth university in Ohio with the Morrill Act of 1862,[5] the university was originally known as the Ohio Agricultural and Mechanical College. The college originally focused on various agricultural and mechanical disciplines but it developed into a comprehensive university under the direction of then-Governor (later, U.S. president) Rutherford B. Hayes, and in 1878 the Ohio General Assembly passed a law changing the name to "The Ohio State University".[6] The main campus in Columbus, Ohio, has since grown into the third-largest university campus in the United States.[7]</p>
        <h3>Campuses</h3>
        <ul id="campuses">
            
        </ul>
        <h3>Marching Band</h3>
        <p id="band-info">Ohio State's marching band is known as the best damn band in the land.</p>
    </body>
    <script>
        var campuses = [
            {
                name: "Columbus",
                lat: "40.0067",
                lon: "-83.0305"
            },
            {
                name: "Lima",
                lat: "40.7373",
                lon: "-84.0283"
            },
            {
                name: "Mansfield",
                lat: "40.7989",
                lon: "-82.5779"
            },
            {
                name: "Marion",
                lat: "40.5804",
                lon: "-83.0915"
            },
            {
                name: "Newark",
                lat: "40.0581",
                lon: "-82.4013"
            },
            {
                name: "Wooster",
                lat: "40.8051",
                lon: "-81.9351"
            }
        ];

        function getWeather(campus) {
            var url = "https://fcc-weather-api.glitch.me/api/current?lat="+ campus["lat"] +"&lon=" + campus["lon"];
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    var temp = response["main"]["temp"];
                    temp = (temp * 9/5) + 32;
                    var listItem = document.createElement("LI");
                    var text = document.createTextNode(campus["name"] + " - " + temp);
                });
        }

        var campus;
        for (campus of campuses) {
            getWeather(campus);
        }
    </script>
</html>
```

Now, all we need to do is add some logic to add the campuses and temperatures to the list.  We also need to assign the correct id/class depending if it is the main campus or regional campus.  How do you think we can do this?  The solution that I got is below.

```javascript
var listItem = document.createElement("LI");
var text = document.createTextNode(campus["name"] + " - " + temp);

listItem.appendChild(text);

if (campus["name"] == "Columbus") {
    listItem.id = "main-campus";
} else {
    listItem.classList.add("regional-campus");
}

document.getElementById("campuses").appendChild(listItem);
```

Does that make sense?  Do you see how we append the innerHTML every time with a new list item?  Ok, now it is time to put it all together!  Your code now should look like this.

```javascript
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ohio State</title>
        <style>
            body {
                background-color: #fff7f7;
            }
            h1, h3 {
                color: #666;
            }
            img {
                float: right;
                height: 100px;
            }
            #main-campus {
                color: #bb0000;
            }
            .regional-campus {
                color: green;
            }
            p {
                color: gray;
            }
            #band-info {
                color: black;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>
            THE Ohio State University
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/150px-Ohio_State_University_seal.svg.png" alt="University Seal">
        </h1>
        <p>The Ohio State University (commonly Ohio State or OSU) is a public research university in <a href="https://www.columbus.gov/">Columbus, Ohio</a>. Founded in 1870 as a land-grant university and the ninth university in Ohio with the Morrill Act of 1862,[5] the university was originally known as the Ohio Agricultural and Mechanical College. The college originally focused on various agricultural and mechanical disciplines but it developed into a comprehensive university under the direction of then-Governor (later, U.S. president) Rutherford B. Hayes, and in 1878 the Ohio General Assembly passed a law changing the name to "The Ohio State University".[6] The main campus in Columbus, Ohio, has since grown into the third-largest university campus in the United States.[7]</p>
        <h3>Campuses</h3>
        <ul id="campuses">
            
        </ul>
        <h3>Marching Band</h3>
        <p id="band-info">Ohio State's marching band is known as the best damn band in the land.</p>
    </body>
    <script>
        var campuses = [
            {
                name: "Columbus",
                lat: "40.0067",
                lon: "-83.0305"
            },
            {
                name: "Lima",
                lat: "40.7373",
                lon: "-84.0283"
            },
            {
                name: "Mansfield",
                lat: "40.7989",
                lon: "-82.5779"
            },
            {
                name: "Marion",
                lat: "40.5804",
                lon: "-83.0915"
            },
            {
                name: "Newark",
                lat: "40.0581",
                lon: "-82.4013"
            },
            {
                name: "Wooster",
                lat: "40.8051",
                lon: "-81.9351"
            }
        ];

        function getWeather(campus) {
            var url = "https://fcc-weather-api.glitch.me/api/current?lat="+ campus["lat"] +"&lon=" + campus["lon"];
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    var temp = response["main"]["temp"];
                    temp = (temp * 9/5) + 32;
 
                    var listItem = document.createElement("LI");
                    var text = document.createTextNode(campus["name"] + " - " + temp);

                    listItem.appendChild(text);

                    if (campus["name"] == "Columbus") {
                        listItem.id = "main-campus";
                    } else {
                        listItem.classList.add("regional-campus");
                    }

                    document.getElementById("campuses").appendChild(listItem);
                });
        }

        var campus;
        for (campus of campuses) {
            getWeather(campus);
        }
    </script>
</html>
```

### Action Listeners

Awesome! Now we can easily access the current temperature of each OSU campus.  Haven't you been dreaming of this for your entire life?  I bet you can't wait for us to make it better.  We are going to add a refresh button!

We are going to change the code such that when the page loads, the temperatures are updated.  Also, we will add a refresh button.

First off, add a button (with an id) to the HTML just above the `<ul>` tag.  You can add a button with: `<button id="refresh">Refresh</button>`.  Next, we need to add the temperatures when the page loads.  We can do so with the following piece of code:

```javascript
window.addEventListener('load', function () {
    var campus;
    for (campus in campuses) {
        getWeather(campus);
    }
});
```
Lastly, all we need to do is add an action listener to our button!  Can you guess how we will do this based on the code above?  Remember that we should clear out the inner HTML of the list before appending new list items! This is how I did it:

```javascript
var button = document.getElementById("refresh");
button.addEventListener('click', function () {
    var campus;
    document.getElementById("campuses").innerHTML = "";
    for (campus in campuses) {
        getWeather(campus);
    }
});
```

Now we just put all of this code together and run it!

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ohio State</title>
        <style>
            body {
                background-color: #fff7f7;
            }
            h1, h3 {
                color: #666;
            }
            img {
                float: right;
                height: 100px;
            }
            #main-campus {
                color: #bb0000;
            }
            .regional-campus {
                color: green;
            }
            p {
                color: gray;
            }
            #band-info {
                color: black;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>
            THE Ohio State University
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/150px-Ohio_State_University_seal.svg.png" alt="University Seal">
        </h1>
        <p>The Ohio State University (commonly Ohio State or OSU) is a public research university in <a href="https://www.columbus.gov/">Columbus, Ohio</a>. Founded in 1870 as a land-grant university and the ninth university in Ohio with the Morrill Act of 1862,[5] the university was originally known as the Ohio Agricultural and Mechanical College. The college originally focused on various agricultural and mechanical disciplines but it developed into a comprehensive university under the direction of then-Governor (later, U.S. president) Rutherford B. Hayes, and in 1878 the Ohio General Assembly passed a law changing the name to "The Ohio State University".[6] The main campus in Columbus, Ohio, has since grown into the third-largest university campus in the United States.[7]</p>
        <h3>Campuses</h3>
        <button id="refresh">Refresh</button>
        <ul id="campuses">
            
        </ul>
        <h3>Marching Band</h3>
        <p id="band-info">Ohio State's marching band is known as the best damn band in the land.</p>
    </body>
    <script>
        var campuses = [
            {
                name: "Columbus",
                lat: "40.0067",
                lon: "-83.0305"
            },
            {
                name: "Lima",
                lat: "40.7373",
                lon: "-84.0283"
            },
            {
                name: "Mansfield",
                lat: "40.7989",
                lon: "-82.5779"
            },
            {
                name: "Marion",
                lat: "40.5804",
                lon: "-83.0915"
            },
            {
                name: "Newark",
                lat: "40.0581",
                lon: "-82.4013"
            },
            {
                name: "Wooster",
                lat: "40.8051",
                lon: "-81.9351"
            }
        ];

        function getWeather(campus) {
            var url = "https://fcc-weather-api.glitch.me/api/current?lat="+ campus["lat"] +"&lon=" + campus["lon"];
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    var temp = response["main"]["temp"];
                    temp = (temp * 9/5) + 32;
 
                    var listItem = document.createElement("LI");
                    var text = document.createTextNode(campus["name"] + " - " + temp);

                    listItem.appendChild(text);

                    if (campus["name"] == "Columbus") {
                        listItem.id = "main-campus";
                    } else {
                        listItem.classList.add("regional-campus");
                    }

                    document.getElementById("campuses").appendChild(listItem);
                });
        }

        window.addEventListener('load', function () {
            var campus;
            for (campus of campuses) {
                getWeather(campus);
            }
        });

        var button = document.getElementById("refresh");
        button.addEventListener('click', function () {
            var campus;
            document.getElementById("campuses").innerHTML = "";
            for (campus of campuses) {
                getWeather(campus);
            }
        });
    </script>
</html>
```

## Conclusion

We just went through a ton of information, and I do not expect any of you to be masters of JS by now.  While working on projects, use this page, w3schools.com, and stackoverflow.com as resources.  Moreover, you can always ask the leadership of C4C for help!
