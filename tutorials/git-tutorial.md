---
layout: page
title: Git Tutorial
permalink: /git-vscode-tutorial
content_style: github_markdown
---
# Tutorial 1: Git and Visual Studio Code

By: Andrew Haberlandt

Reviewed by: 

## Before we get started
* Download a modern browser (preferably [Chrome](https://www.google.com/chrome/){:target="_blank"} or [Firefox](https://www.mozilla.org/en-US/firefox/){:target="_blank"})
* Download [Visual Studio Code](https://code.visualstudio.com/download){:target="_blank"}
* You need a Github Account. Fill out the survey on our homepage with your Github username, so we can add you to our Github organization.

## Overview
- [Part 1: About Git](#part-1-about-git)
- [Part 2: Cloning a Repository](#part-2-cloning-a-repository)
- [Part 3: Making Modifications](#part-3-making-modifications)
- [Part 4: Commit and Push Your Changes](#part-4-commit-and-push-your-changes)
- [Part 5: Pull Request](#part-5-pull-request)


# Part 1: About Git

A 'repository' consists of two parts:

- a 'working tree': These are the files you have 'checked out' on your computer. This is what you see in the file explorer on your operating system or the explorer pane in VS Code.
- a 'history':  Stored in the `.git/` folder (*don't touch!*), Git tracks the history of all your files

(Note: This is a simplification. Once you take CSE 3901/3902/3903 you will study Git in more detail)

A 'history' is a **graph** of **commits**. A **commit** (noun, also known as a 'revision') is a set of changes to files in your repository, accompanied by a message describing the changes. [Here's an example commit on Github.](https://github.com/Code4Community/git-tutorial/commit/0ad8fd04cca43603f9660282e62b40b34c2bc213)

- A **commit** (except for the first) always has at least one parent - thus you can always trace any commit back to the single 'initial' commit in any repository. So, you can see all of the changes that lead up to the current state.

- A **commit** will always be on a particular **branch** - you can think of branches as multiple independent (but connected)  parts of your 'history' - this is useful if you are simulataneously working on multiple features on the same project. The default branch in Git is the `master` branch.

- 'commit' is also used as a verb - meaning the act of creating a commit from your local changes (we'll use this in Part 4)

If everyone just pushed to the `master` branch, you might have a purely linear history:

```
                        [master]
                           |
* -----> * -----> * -----> * 
A        B        C        D
```

But in reality, you have multiple people working on multiple different features -- they will use different branches that can be merged together as features are finished:

```
                                      
* -----> * -----> * -----> * -------> * [master]
A \      C      / E \     F \         I
   \           /     \       \
    * ------> *       \       * -----> * [feature-2]
    B        D         \      H        J
                        \ 
                         \
                          * [feature-1]
                          G
```

This entire graph is stored in the "history".

Your local computer and the server (We use Github, but there are many services) might have differing histories. To sync our history with the history stored by the server, we will use two operations:

- **Push**: Push any additional commits **on the current branch** from my local history to the remote server. (If a remote branch does not exist with that name, VS Code will prompt you and it will be created on the remote server.)
- **Pull**: Pull any additional commits **on the current branch** from the remote server and store them in my local history. This also updates your **working tree** (the files you see on disk will update to reflect any changes).

**You will never be able to directly push to master.** Therefore, before pushing your code you will have to checkout a new local branch (this is covered in the later parts of this tutorial.)



# Part 2: Cloning a repository

Git has a nice [command-line interface](https://git-scm.com/docs/gittutorial), but for the purposes of this tutorial we will be using the interface in Visual Studio Code. 

- Open Visual Studio Code, and open a new window (File -> New Window)

- Select the 'Git' menu.

![](images/git-tutorial/screenshot1.png)

- Choose "Clone Repository"

- Choose "Clone from Github" and complete the one-time authentication process

- You should then be able to type "code4community/" and get a list of all repositories in our organization!

![](images/git-tutorial/screenshot2.png)

- Choose "code4community/git-tutorial"
    - If you can't find it, make sure you have filled out the sign-up form on our website homepage with your Github username. Then, contact Max Gruber
    and he will ensure you are added to the Github organization. 

- You will be prompted to choose a location on disk to clone the repository
    - A folder named "git-tutorial" will automatically be created *within* whatever folder you select.

- After the clone is complete, you will see the the following in the lower-right:
    
    ![](images/git-tutorial/screenshot3.png)

    You likely want to choose "Open" if you followed the instructions closely, since you already have an empty window.

You should see the files for the repository, as shown in the below screenshot:

![](images/git-tutorial/screenshot4.png)

Congratulations! You succesfully cloned our repository!

You can also view the repository for this tutorial on Github [here](https://github.com/Code4Community/git-tutorial). All of our repositories are available on our [organization Github page](https://github.com/Code4Community).

Find the repository location in your operating system's finder/explorer, and open index.html in your web browser of choice. You should see the following (with the images moving around the screen):

![](images/git-tutorial/screenshot5.png)

# Part 3: Making modifications

Goal: Add yourself to our [display of bouncing heads](https://code4community.github.io/git-tutorial/)

## Step 0: Check out a new branch

By default, when you clone a repository, Git checks out the `master` branch. On your local machine, you can commit to the master branch. **However, we have configured Github to refuse pushing to the `master` branch directly.** 

Why? It's because for all of our projects, you will be pushing to separate branches for each feature you work on. You will then create a **pull request** in Github, requesting that *your peers review your code* before it gets merged into the `master` branch.

- Select the 'master' button in the bottom bar of VS Code

![](images/git-tutorial/screenshot10.png)

- Select 'Create new branch...'

![](images/git-tutorial/screenshot9.png)


- Give your branch a unique name. For the purposes of this tutorial, just use your lastname.#

- Verify in the bottom bar that your new branch name is displayed instead of 'master'.


## Step 1: Add your image

Add an image to the `images/` directory. You can drag-and-drop from the file explorer on your operating system directly into VS Code.

Note: Your image does not have you be an actual picture of yourself, although it might help us learn eachother's names.

![](images/git-tutorial/screenshot6.png)


## Step 2: Modify index.html

All you need to do is add the following four lines inside the `<div id="heads-area">` tag.

```html
<div class="person-frame-inner">
    <img class="ball" src="images/brutus.jpg" />
    <p>Brutus</p>
</div>
```

Change the name from 'Brutus' to your name, and change the image `src` to the path to the image you addied in the previous step. 

Add your lines in index.html directly below the last person's similar-looking piece of code. Ensure that the lines you add are fully inside the `<div id="heads-area">` tag, but not within someone else's `<div class="person-frame-inner">`. 

We will be covering HTML and CSS next week, so don't worry about the details too much right now.

## Optional: Make it your own

If you're feeling creative, feel free to modify your own animation (see main.css to see how we did it). Feel free to google something or ask if you're not sure how. (Note: we'll be covering HTML/CSS in more detail next week, so you're not expected to know how to do any of this)

Ideas:
- Rotate or resize your image as part of the animation
- Adjust the animation speed
- Implement collisions between images (note: this is difficult using CSS animations. you'll need some fancy javascript)

# Part 4: Commit and push your changes

![](images/git-tutorial/screenshot7.png)

Things to note:
- The 'M' next to index.html means we have `M`odified that file in our working tree
- The 'U' next you the image you added means this file is `U`ntracked - we haven't told Git to track changes to this file yet. The file is brand-new and has no history.


## Step 1: 'Stage' your changes

Switch to the Git pane, and you'll see only the files with changes in your working copy.

![](images/git-tutorial/screenshot11.png)

- Press the '+' on the files you'd like to commit. Or, select '+' next to 'Changes' to add all changes.

![](images/git-tutorial/screenshot12.png)

Now, you should see:

![](images/git-tutorial/screenshot14.png)

Note: the 'U' next to the image has changed to an 'A' for `A`dded, now that we have added this file to Git.

## Step 2: Commit your changes

Add a commit message:

![](images/git-tutorial/screenshot13.png)

Press the checkmark:

![](images/git-tutorial/screenshot15.png)

## Step 3: Push your changes

- Look in the bottom bar. You should see something like the following (it will say your branch name rather than master):
    
    ![](images/git-tutorial/screenshot16.png)
    
    This means you have 1 commit to push, and 0 commits to pull. If someone else was working on the same branch as you and pushed their changes, there would be a nonzero number of commits for you to pull.

- Press on the button pictured above in the bottom bar. It will automatically push and pull from the remote repository.

# Part 5: Pull Request

[Example Pull Request](https://github.com/Code4Community/git-tutorial/pull/1)

## Step 1: Create the pull request

If you pull up the [repository](https://github.com/Code4Community/git-tutorial) in a browser, you might see the following (with your branch name):

![](images/git-tutorial/screenshot17.png)

If so, you can click 'Compare & Pull request' and it save you a few clicks.

Otherwise:
- Go to the [repository homepage](https://github.com/Code4Community/git-tutorial)
- Click 'Pull Requests'
- Click 'New Pull Request'

You'll see something like this:

![](images/git-tutorial/screenshot18.png)

- 'base' is the branch you want you merge your changes *into*
- 'compare' is the branch your changes are currently on (this is the branch you created earlier)

So,

- All you should have to do is change the 'compare' branch to your branch, and click 'Create pull request'.
    - If you can't find your branch, that means you didn't successfully push your changes in the previous part. Let us know and we can try to help you.
- Give your pull request a title and leave a comment with any issues you had
- Click 'Create pull request' (again)

## Step 2: Getting your pull request reviewed

For this repository, you need **at least two approvals** before you'll be able to merge your pull request into master.
- We encourage you to seek approvals from others completing the tutorial, and feel free to review others pull requests as well.
- One of the approvals must be @ndrewh, @maxdg99, or @adambricelis. Actual projects may or may not require reviews like this.
- Request your reviews

![](images/git-tutorial/screenshot20.png){:style="height: 50vh;"}


Until you have the required reviews, you'll see this:

![](images/git-tutorial/screenshot21.png){:style="width: 50vw;"}


Once you have the required approvals, your pull request will show this and you'll be able to merge it into master with one click :)

![](images/git-tutorial/screenshot19.png){:style="width: 50vw;"}


# That's it!

You're done. Before you leave, ask people to review your request and we should be able to merge it in very quickly. You'll be able to see your changes live on [https://code4community.github.io/git-tutorial/](https://code4community.github.io/git-tutorial/) once your changes get merged into master.


# Feedback

If you have any feedback on this tutorial, feel free to create an issue on the Github repo or talk to one of the exec board members.

# Help! I have merge conflicts... now what?

Merge conflicts can occur when multiple developers make changes to the same part of the same file, and then try to merge their branches. 

As long as you are working on your own branch, you will not run into merge conflicts *until you try to merge into `master`*. Github now has a nice UI for handling merge conflicts -- and we can walk you through this if you get to it.

Being able to deal with merge conflicts is not necessary to be able to contribute to any of our projects -- there will always be someone to help you with merge conflicts.
