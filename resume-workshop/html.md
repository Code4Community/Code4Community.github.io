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
* Here you can see that the <html> tag is the first tag opened, and the last one closed. <head> is then opened, followed by some HTML code, then </head> is closed. Notice how <head> was closed before <html> because <head> appeared after (further down).
* This idea of closing tabs is easier to visualize with the use of spacing. Here is the same HTML from above, but now with indentation.
![alt text](./htmlex2.png?raw=true)
#### Required* Tags
* &lt;!DOCTYPE html>: tells the browser that the file is HTML
  * This tag appears at the very top of the file, and does not require a matching closing tag
* &lt;html>: signals the start and end of html code
* &lt;head>: encloses all the metadat of the webpage
  * This is where you would add the title to your webpage, SEO (search engine optimization) keywords, links to other files, and much more.
* &lt;body>: where the majority of the visual content of the page goes. 
* Here is a basic visualization of the required tags:
![alt text](./htmlex3.png?raw=true)

> \* Most modern browsers may still be able to understand your HTML page without these, but it is best practice to include all three of the above tags in every page.

#### Basic Tags
* &lt;h1>,&lt;h2> ... &lt;h6> : used to denote a heading. h1 is the largest/most bolded, h6 the smallest/least bolded.
  * Example: &lt;h1> About Me: &lt;/h1>
* &lt;p> : denotes a paragraph of text.
  * Example: &lt;p> lorem ipsum …. &lt;/p>
* &lt;a> : inserts a link into your webpage
  * Example: &lt;a href=”google.com”> link! &lt;/a> would show up as <a href=”google.com”> link! </a> in your rendered HTML page
* &lt;img> : used to render an image in your webpage.
  * Example: &lt;img src=”dog.png” alt=”this is a picture of a dog” height=”200px” width=”200px”>
* &lt;ul> and &lt;li> : used to display a bulleted list
  * Example: &lt;ul>
                &lt;li> Dog &lt;/li>
                &lt;li> Cat &lt;/li>
                &lt;li> Fish &lt;/li>
	            &lt;/ul>
  * Would be rendered as:
      <ul>
		<li> Dog </li>
		<li> Cat </li>
		<li> Fish </li>
	    </ul>
* There are many, many, more HTML tags than those listed above; These are just the very basics. If you are looking for more, you can find a searchable list of tags here: https://www.w3schools.com/TAGS/default.ASP
  
 

   


