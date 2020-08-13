---
layout: page
title: HTML & CSS Tutorial
permalink: /tutorial-2
content_style: github_markdown
---
<style>
    img {
        box-shadow: 0 5px 15px grey;
    }
</style>

# HTML & CSS Tutorial

By: [Adam Lis](https://github.com/adambricelis)

## Before we get started
* Fulfill the [prerequisites of the git tutorial](https://code4community.github.io/tutorial-1#before-we-get-started)
* Complete the [git tutorial](https://code4community.github.io/tutorial-1)
* When you reach a checkpoint, please compare your webpage with the screenshot provided. If they don't match up, ask for help!

## Overview
* [Part 1: Why do we need HTML, CSS, *and*, JavaScript?](#part-1-why-do-we-need-html-css-and-javascript)
* [Part 2: HTML](#part-2-html)
* [Part 3: CSS](#part-3-css)

## Part 1: Why do we need HTML, CSS, *and*, JavaScript?
If you have prior experience with programming languages like Java or Python, you've probably written entire applications in one programming language. This begs the question in the title of this section: why do webpages involve *three* programming languages?

Every webpage has to answer a few different questions before it shows up on your screen in your browser.

1. What am I displaying?
1. How am I displaying it?
1. How do I respond to user interaction?

Each of these questions is answered by one of the languages of the web. HTML knows what to display, CSS knows how to display it, and JavaScript knows how to respond to user interaction. Without HTML, your webpage has no content. Without CSS, your webpage looks like [this](https://www.berkshirehathaway.com/). Without JavaScript, users can't *do* anything other than look at your site (which is okay for some sites, but not for others). When building a website, it's best to keep your HTML, CSS, and JavaScript in separate files. However, we're going to keep everything in one file for the sake of simplicity.

## Part 2: HTML

### Background
HTML stands for Hypertext Markup Language. A "markup language" is not a programming language. Rather, it's a way of annotating, or "marking up" text with formatting information. The formatting information is interpreted by a program (in this case, a browser) and then displayed to your screen.

Every HTML page should look something like this. The `<!DOCTYPE html>` tag tells the browser we're writing HTML5 (the latest version of HTML). The `<head></head>` tag tells the browser about our webpage (this information is called metadata). The `<body></body>` tag tells the browser what to display on our webpage.
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello World!</title>
    </head>
    <body>
    </body>
</html>
```

### Getting Started
1. Open VS Code
1. Create a file named `tutorial.html`
    - File > New File > tutorial.html
1. Copy the skeleton code from above into this file
1. Save this file somewhere on your computer
    - Ctrl + S or Command + S
1. Open `tutorial.html` in a web browser
    1. Right click the `tutorial.html` tab at the top of the screen in VS Code
    1. Click "Reveal in Explorer" or "Open Containing Folder"
        - This will depend upon your operating system (Windows, macOS, Linux)
    1. Double click `tutorial.html` in your file explorer
        - This should open the file in your default web browser

Checkpoint 1:

![](images/html-css-tutorial/screenshot1.png)

Congrats! You have a webpage! Although...it's pretty boring. Let's change that by adding some content.

### Adding Content
HTML has many different tags we can use to display different information. There are tags for headers, paragraphs, lists, navigation, links, images, forms, and all sorts of other things. We'll just cover a few today, although you can read about [all of HTML's tags](https://www.w3schools.com/tags/default.asp) if you'd like to learn more.

Let's start with a paragraph. Put a `<p></p>` tag inside of the `<body></body>` tag and put some text between the opening (`<p>`) and closing (`</p>`) tags. I'm going to use the text from the first paragraph on [Ohio State's Wikipedia page](https://en.wikipedia.org/wiki/Ohio_State_University).

Checkpoint 2:

![](images/html-css-tutorial/screenshot2.png)

At the end of that paragraph from Wikipedia, there's a list of regional campuses. Let's take that sentence out of our paragraph and move it into a list of campuses. HTML has two types of lists: ordered `<ol></ol>` and unordered `<ul></ul>`. Since there isn't any particular order to the campuses, we'll use an unordered list. Put it inside of the body tag but after the paragraph tag. Then, put each campus in a list item tag (`<li></li>`) between the opening (`<ul>`) and closing (`</ul>`) list tags. Don't forget to add Columbus to the list!

Checkpoint 3:

![](images/html-css-tutorial/screenshot3.png)

Since this webpage is taking on an Ohio State theme, we should probably update the title and add a header. Change the contents of the title tag from "Hello World!" to "Ohio State". There are six header tags in HTML, `<h1></h1>`...`<h6></h6>` with h1 tags being the largest headers and h6 tags being the smallest headers. Let's add an h1 tag to top of our webpage with the text "THE Ohio State University". Make sure to put it inside of the body tag but before the paragraph tag.

Checkpoint 4:

![](images/html-css-tutorial/screenshot4.png)

Since we're making a website about Ohio State, we *have* to mention the marching band. Let's add a paragraph at the bottom of the page that says "Ohio State's marching band is known as the best damn band in the land." While we're at it, we should add a couple headers: one for our list of campus and one for the marching band. Put an h3 tag that says "Campuses" before the list of campuses, and put an h3 tag that says "Marching Band" before the paragraph about the marching band. Make sure not to put those inside of any tags other than the body tag.

Checkpoint 5:

![](images/html-css-tutorial/screenshot5.png)

Lastly, we're going to add an image (`<img>`) and a link (`<a></a>`) to our page. Thus far, we've only dealt with tags that have text inside. However, these last two tags are a little bit different. The anchor (link) tag has opening and closing tags, but the image tag doesn't. And both of them require you to set attributes to make them useful. Here's the syntax for setting a tag attribute in HTML: `<tag attribute="value"></tag>` or `<tag attribute="value">`. One tag can have any number of attributes.

Add an image tag inside of the h1 tag after "THE Ohio State University". Set its `src` attribute to "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/150px-Ohio_State_University_seal.svg.png", the URL of OSU's seal on Wikipedia. This attribute tells the browser where to find the image you'd like to display. Set the `alt` attribute to "University Seal". This attribute is important for accessibility because visually impaired people browse the web using [screen readers](https://en.wikipedia.org/wiki/Screen_reader). It also tells the browser what to display if the browser cannot retrieve the image.

Add an anchor tag around "Columbus, Ohio" in the paragraph about Ohio State from Wikipedia. Set its `href` attribute to "https://www.columbus.gov/", Columbus's website.

Checkpoint 6:

![](images/html-css-tutorial/screenshot6.png)

### Result
Your code should look something like this:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ohio State</title>
    </head>
    <body>
        <h1>
            THE Ohio State University
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/150px-Ohio_State_University_seal.svg.png" alt="University Seal">
        </h1>
        <p>The Ohio State University (commonly Ohio State or OSU) is a public research university in <a href="https://www.columbus.gov/">Columbus, Ohio</a>. Founded in 1870 as a land-grant university and the ninth university in Ohio with the Morrill Act of 1862,[5] the university was originally known as the Ohio Agricultural and Mechanical College. The college originally focused on various agricultural and mechanical disciplines but it developed into a comprehensive university under the direction of then-Governor (later, U.S. president) Rutherford B. Hayes, and in 1878 the Ohio General Assembly passed a law changing the name to "The Ohio State University".[6] The main campus in Columbus, Ohio, has since grown into the third-largest university campus in the United States.[7]</p>
        <h3>Campuses</h3>
        <ul>
            <li>Columbus</li>
            <li>Lima</li>
            <li>Mansfield</li>
            <li>Marion</li>
            <li>Newark</li>
            <li>Wooster</li>
        </ul>
        <h3>Marching Band</h3>
        <p>Ohio State's marching band is known as the best damn band in the land.</p>
    </body>
</html>
```

Nice job! Now you know some basic HTML. However, our website is still a bit bland. I know what'll do the trick...

## Part 3: CSS

### Background
CSS stands for Cascading Style Sheets. It is also known as "styling". The "cascade" portion of the title is beyond the scope of this tutorial, but you can [read about it](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) if you'd like to learn more.

When you're styling a webpage with CSS, you create rules which tell the browser how your webpage should be displayed. Those rules have two parts: selectors and declarations.

#### Selectors
Selectors allow you to specify *what* elements you're styling. The basic selectors are types, classes, and IDs. You can read more about [the other types of selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) if you'd like to learn more. In CSS, types are specified as tag names like `p`, `h3`, and `img`. Classes and IDs are attributes, so I hope you were paying attention when we went over them earlier. You add classes and IDs to tags just like any other attributes: `<tag class="my-class"></tag>` or `<tag id="my-id"></tag>`. In CSS, classes are specified with a dot prefix like `.my-class` and IDs are specified with a hash prefix like this `#my-id`. You can have multiple elements that use the same type and multiple elements that have the same class, but you can only have one element with a given ID. *That's why they're called IDs, they must be unique.*

#### Declarations
Declarations allow you to specify *how* you want elements to be styled.

### Adding styling


### Result
Your code should look something like this:
```
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
        <ul>
            <li id="main-campus">Columbus</li>
            <li class="regional-campus">Lima</li>
            <li class="regional-campus">Mansfield</li>
            <li class="regional-campus">Marion</li>
            <li class="regional-campus">Newark</li>
            <li class="regional-campus">Wooster</li>
        </ul>
        <h3>Marching Band</h3>
        <p id="band-info">Ohio State's marching band is known as the best damn band in the land.</p>
    </body>
</html>
```

Now that you've completed this tutorial, you have your own little static webpage!
