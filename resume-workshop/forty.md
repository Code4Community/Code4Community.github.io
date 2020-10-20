---
layout: page
title: Resume Workshop - Template - forty-jekyll-theme
permalink: /resume-workshop/forty
content_style: github_markdown
---

# Forty-jekyll-theme
https://github.com/andrewbanchich/forty-jekyll-theme

- First, explore the [demo site](https://andrewbanchich.github.io/forty-jekyll-theme/) a bit to get a sense of how it is set up. You can remove or add pages as needed. 

## Be sure to consult the [Github Basics](basics) page to see step-by-step instructions on how to add, remove, or, or rename a file.

1. Modify config.yml:

    (a) baseurl: ‘/repo_name’, so probably ‘/forty-jekyll-theme’ unless you rename the repository
    (b) url: https://YourUsername.github.io/
    (c) author: Your Name
    (d) Change street address or phone # if you wish, or leave blank
    (e) Change anything under “# social settings” if you want, or leave any of them blank to exclude

2. Modify index.md
    (a) Find the line:
    ```
    landing-title: 'Hi, my name is Forty'
    ```
    
    Modify the line to read
    ```
    landing-title: 'Hi, my name is FirstName
    ```

3. From here, it’s up to you:

- Removing pages you don’t want (they will automatically be removed from the menu as well):

    You may want to remove or modify:
    - elements.md
    - generic.md
    - landing.md
    - all_posts.md

- Suggested pages: Projects, About Me (if you need more than what’s on the homepage), 
    To create a page, we suggest duplicating ‘generic.md’ and then:
    ```
    layout: post
    title: Generic
    description: Lorem ipsum dolor est
    image: assets/images/pic11.jpg
    nav-menu: true
    ```
    should be changed to:
    ```
    layout: post
    title: Projects
    description: My projects
    image: assets/images/pic11.jpg
    nav-menu: true
    ```
    And add content below the --- to whatever you’d like:
    ```
    My projects include
    - Project 1
    
    Project 1 was very exciting.
    ```

