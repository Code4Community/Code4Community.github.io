---
layout: page
title: Resume Workshop - HTML
permalink: /resume-workshop/html
content_style: github_markdown
---

# Resume Workshop - HTML Introduction
## Basics
* HTML (hyper text markup language) is the basis of most websites.
* HTML is the scaffolding and structure of a webpage; It tells your browser the basics of how your content should be laid out.
* To do this, HTML uses **tags** and **attributes**
#### Tags + Attributes
* Tags: symbolize one single HTML element.
   * Tags are denoted with angled brackets ‘<’ and ‘>’, with the specific type of tag enclosed inside of them. 
   * Example: A paragraph in HTML uses the &lt;p&gt; tag 
* Most tags require a closing tag. This just tells the browser where this particular element ends. The ending tag has a ‘/’ just inside the first angle bracket.
   * Example: with closing tag, the proper formatting for a paragraph is: <p> sample text </p>
* Attributes: specify additional information about that particular tag.
   * Example: in HTML images are included with the <img> tag, but the browser needs to know where to find the image.
   * &lt;img src = “picture.jpg”&gt;
   * Here img is the tag, and src is an attribute that is being set to ‘picture.jpg
   * The end result is that the browser displays picture.jpg 
#### Opening and Closing Tags
* Tags must be closed in the order that you opened them.
   * Example: &lt;p> some &lt;em> text &lt;/p> &lt;/em>. This is wrong. You must close the &lt;em> tag before you can close the &lt;p> tag. 
   * The correct way to do this would be &lt;p> some &lt;em> text &lt;/em> &lt;/p>
   * Here, the &lt;p> tag is opened, then &lt;em> is opened. Then &lt;em> is closed, then &lt;p> is closed.
* This principle holds true, no matter how many tags are present.
* Here is an example of a larger collection of HTML tags. Don't worry if you don't recognize the tags (you can always look this up).

![alt text](./htmlex1.png?raw=true)

   


