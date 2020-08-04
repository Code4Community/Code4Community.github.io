---
layout: page
title: HTML & CSS Tutorial
permalink: /tutorial-2
content_style: github_markdown
---
# HTML & CSS Tutorial

By: [Adam Lis](https://github.com/adambricelis)

## Before we get started
* Fulfill the [prerequisites of the git tutorial](https://code4community.github.io/tutorial-1#before-we-get-started)
* Complete the [git tutorial](https://code4community.github.io/tutorial-1)

## Overview
- [Part 1: Why do we need HTML, CSS, *and*, JavaScript?](#part-1-why-do-we-need-html-css-and-javascript)
- [Part 2: HTML](#part-2-html)
- [Part 3: CSS](#part-3-css)
- [Part 4: Result](#part-4-result)

## Part 1: Why do we need HTML, CSS, *and*, JavaScript?
If you have prior experience with programming languages like Java or Python, you've probably written entire applications in one programming language. This begs the question in the title of this section: why do webpages involve *three* programming languages?

Every webpage has to answer a few different questions before it shows up on your screen in your browser.

1. What am I displaying?
1. How am I displaying it?
1. How do I respond to user interaction?

Each of these questions is answered by one of the languages of the web. HTML knows what to display, CSS knows how to display it, and JavaScript knows how to respond to user interaction. Without HTML, you have no content to display on your webpage. Without CSS, your webpage looks like [this](https://www.berkshirehathaway.com/). Without JavaScript, users can't *do* anything other than look at your site (which is okay for some sites, but not for others).

## Part 2: HTML
HTML stands for Hypertext Markup Language. A "markup language" is not a programming language. Rather, it's a way of annotating, or "marking up" text with formatting information. The formatting information is interpreted by a program (in this case, a browser) and then displayed to your screen.

## Part 3: CSS
CSS stands for Cascading Style Sheets. It is also known as "styling". The "cascade" portion of the title is beyond the scope of this tutorial, but you can [read about it](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) if you'd like to learn more.

## Part 4: Result
Now that you've completed this tutorial, you have your own little static webpage!

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
        <p>The Ohio State University (commonly Ohio State or OSU) is a public research university in <a href="https://www.columbus.gov/">Columbus, Ohio</a>. Founded in 1870 as a land-grant university and the ninth university in Ohio with the Morrill Act of 1862, the university was originally known as the Ohio Agricultural and Mechanical College. The college originally focused on various agricultural and mechanical disciplines but it developed into a comprehensive university under the direction of then-Governor (later, U.S. president) Rutherford B. Hayes, and in 1878 the Ohio General Assembly passed a law changing the name to "The Ohio State University". The main campus in Columbus, Ohio, has since grown into the third-largest university campus in the United States.</p>
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

Your webpage should look something like this:

![](images/tutorial-2/screenshot1.png)
