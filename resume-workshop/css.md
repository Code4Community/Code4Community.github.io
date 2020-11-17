---
layout: page
title: Resume Workshop - CSS
permalink: /resume-workshop/css
content_style: github_markdown
---

# Resume Workshop - CSS Introduction
## Basics
* CSS (Cascading style sheets) is used to style HTML web pages
* If the HTML code is the scaffold, CSS can be thought of as the paint.
* The main idea is to apply styling to different sections of your HTML code
  * Changing the text font and color of paragraphs, adding spacing between headers, etc.
* We apply styling in rules which follow the format of property:value
  * Example: 'color:red' changes the text color to red
  * Example: 'border:1px black' creates a 1px wide black border
## Where can we put our rules? 
* The way we choose what to style and how is dependent on the **selectors**. These tell the browser which rules to apply to which parts of the HTML page. 
* There are 3 main ways to apply CSS styling to your HTML page
  * Inline: straight inside of the HTML tag itself with the style attribute
    * Example: &lt;p style=”color:red”>some text &lt;/p> would render as <span style="color:red">some text</span> 
  * Internal: inside of the head tag you can specify as many rules as you want
    * Example: the following internal styling would change all paragraphs’ text color to red.
    * ![alt text](./cssex1.png?raw=true)
  * External: inside of a completely separate CSS file call a stylesheet. This file can be full of as many rules as you want
    * Example: the following external styling would change all of the paragraphs’ text color to red (in any HTML page that linked to the stylesheet).
    * ![alt text](./cssex2.png?raw=true)
## How do I select which elements get styled?
* Style all of a particular HTML tag
  * Example: the following changes all p tags to have a text color of red.
  * ![alt text](./cssex2.png?raw=true)
* Using a custom class: when writing HTML code, you can group tags together to be styled the same.
  * Example: the following would change both of the tags text to red
  * In HTML file: &lt;p class = “custom”> some text </p>
		          &lt;h1 class = “custom”> header! </h1>
  * In CSS file: 
  * .custom { color: red; }
* There are a lot of rules and properties you can set (too many to list here), for a list of basic CSS functionality go to https://www.w3schools.com/css/default.asp 





   


