---
layout: page
title: Resume Workshop - Making Content Changes
permalink: /resume-workshop/content_changes
content_style: github_markdown
---

# Resume Workshop - Making Content Changes (Modifying Markdown and HTML)

## Title and Header Changes
1. So, let’s start by changing the title of the page from “Swiss Jekyll Theme” to “Hi, I’m [firstname] [lastname]”
2. The title and other content is stored in a configuration file named _config.yml
3. Click on the file _config.yml in the list of files
    * You should see the page reload and display the contents of the file
    * You need to edit this file. Right now it’s read-only though…
4. In the upper-right of the box you should see a number of editing icons. Click on the pencil
    * Edit title on line 16 from “Swiss Jekyll Theme” to: “Hi, I’m [firstname] [lastname]”
    * Change description on line 17 to a brief professional description or tagline for yourself
    * While you're here, fill in information for your:
        * Github username
        * Social link
        * Theme color of choice
    * Once you’re satisfied with your changes, scroll to the bottom. You should see a green “Commit” button. Click that. 
        * You should be transported back to the file view page and should see your edits reflected in the contents of that file
5. Navigate to your website’s url, which is probably https://<yourusername>.github.io/swiss
    * Changes should be visible but may take up to 5 minutes to show up

## Editing the Posts
1. You should see a post two below the large header, entitled “Bacoms are delicious,” dated Sep 4, 2016 and bearing the text “Lorem ipsizzle funky fresh i’m in the shizzle boom shackalack...”
    * These posts will hold your content updates. We’re going to change the first one
2. Navigate to the _posts folder from the root of the repository on GitHub
    * You should see a list of four files, each ending in .md
3. Click on the one labeled “2016-08-07-bacoms-are-delicious.md”
    * Should be the second one down in the list
4. Click the pencil in the upper right to edit the file
5. For the content of your post, I would recommend talking about a recent career-related personal achievement but of course you could post about just about anything
    * On line 3, change the title. Write your new title inside of the double quotes
    * On line 4, change the date to today’s date. The format is YYYY-MM-DD
    * Delete all of the text on and below line 6. Write whatever you’d like here
    * When you are finished, click the green “Commit changes” button at the bottom of the page
    * After about 5 minutes, you should see your new post show up on your website
        * As long as it was dated most recently, it will show up at the top of the website

## Your Actual Resume
1. In the upper-right of your site you should see the word “About,” which is a link to a page. 
    * Click on this link and give the About page a once-over
2. The whole page is formatted text. We are going to replace it with your Resume
3. Navigate to the root of your GitHub project. 
4. Click on the file named about.md
5. You should see the contents of the file. Click on the pencil in the upper right to edit
6. Change the title on line 3 from About to Resume
7. Change the permalink on line 4 from /about/ to /resume/
8. Replace the single line of text on line 7 with your objective statement
    * “Seeking a software engineering internship in summer 2021” or something of that sort
9. The rest of the page will be sectioned content. 
    * Each section will start with a header and be followed by either bullet points or prose
10. Let’s change the “Features” section to “Industry and Work Experience”
    * Line 9: we will make this a section header
    * Delete the contents of the line, and type a single #, a space, and then “Industry and Work Experience” (or your section header of choice), and add a colon at the end
11. Let’s add a work experience entry:
    * Three #s in a row at the start of line 10, and then type your employer name
    * Two #s at the start of line 11, then your job title, followed by your dates of employment
    * Now we have a section header and a two-line work experience entry. Let’s enter some bullet points
    * Line 12, begin with a single *, then a space, then your bullet point
    * Likewise for every following bullet point
        * For sub-points, simply tab the bulleted line in once
            * For sub-sub, use two tabs on the bulleted line, and so-on
    * Once you have entered all of your bullet points, commit your changes and let’s observe your handiwork
    * Navigate to youe website’s url. You should see that the About page’s link has been changed to Resume
    * Click on that and you should be able to see what you have entered so far. 

