---
layout: page
title: Git Tutorial
permalink: /tutorial-1
content_style: github_markdown
---
# Tutorial 1: Git and Visual Studio

By: Andrew Haberlandt

Reviewed by: 

## Before we get started
* Download a modern browser (preferably [Chrome](https://www.google.com/chrome/){:target="_blank"} or [Firefox](https://www.mozilla.org/en-US/firefox/){:target="_blank"})
* Download [Visual Studio Code](https://code.visualstudio.com/download){:target="_blank"}
* You need a Github Account. Fill out the survey on our homepage with your Github username, so we can add you to our Github organization.


# Part 1: About Git

A 'repository' consists of two parts:

- a 'working tree': These are the files you have 'checked out' on your computer. This is what you see in the file explorer on your operating system or the explorer pane in VS Code.
- a 'history':  Stored in the `.git/` folder (*don't touch!*), Git tracks the history of all your files

(Note: This is a simplification. Once you take CSE 3901/3902/3903 you will study Git in more detail)

A 'history' is a **graph**.

If everyone just pushed to the `master` branch, you might have a purely linear history:

```
                        [master]
                           |
* -----> * -----> * -----> * 
A        B        C        D
```

But in reality, you have multiple poeple working on multiple different features:

```
                                      
* -----> * -----> * -----> * -------> * [master]
A \      C      / E \     F \         I
   \           /     \       \
    * ------> *       \       * -----> * [Feature 2]
    B        D         \      H        J
                        \ 
                         \
                          * [Feature 1]
                          G
```

This entire graph is stored in the "history".

Your local computer and the server (We use Github, but there are many services) might have differing histories. To sync our history with the history stored by the server, we will use two operations:

- **Push**: Push any additional commits from my local history on the *current branch* to the remote server. (If a remote branch does not exist with that name, VS Code will prompt you and it will be created on the remote server.)
- **Pull**: Pull any additional commits on the *current branch* from the remote server and store them in my local history. This also updates your **working tree**.

**You will never be able to directly push to master.** Therefore, before pushing your code you will have to checkout a new local branch (this is covered in the later parts of this tutorial.)



# Part 2: Cloning a repository

- Open Visual Studio Code, and open a new window (File -> New Window)

- Select the 'Git' menu.

![](images/tutorial-1/screenshot1.png)

- Choose "Clone Repository"

- Choose "Clone from Github" and complete the one-time authentiction process

- You should then be able to type "code4community/" and get a listing of all repositories in our organization!

![](images/tutorial-1/screenshot2.png)

- Choose "code4community/git-tutorial"
    - If you can't find it, make sure you have filled out the sign-up form on our website homepage with your Github username. Then, contact Max Gruber
    and he will ensure you are added to the Github organization. 

- You will be prompted to choose a location on disk to clone the repository
    - A folder named "git-tutorial" will automatically be created *within* whatever folder you select.

- After the clone is complete, you will see the the following in the lower-right:
    
    ![](images/tutorial-1/screenshot3.png)

    You likely want to choose "Open" if you followed the instructions closely, since you already have an empty window.

You should see the files for the repository, as shown in the below screenshot:

![](images/tutorial-1/screenshot4.png)

Congratulations! You succesfully cloned our repository!

Find the repository location in your operating system's finder/explorer, and open index.html in your web browser of choice. You should see the following:

![](images/tutorial-1/screenshot5.png)

# Part 3: Making modifications

Goal: Add yourself to our display of bouncing heads

Step 0: Check out a new branch
------

By default, when you clone a repository, Git checks out the `master` branch. On your local machine, you can commit to the master branch. **However, we have configured Github to refuse pushing to the `master` branch directly.** 

Why? It's because for all of our projects, you will be pushing to separate branches for each feature you work on. You will then create a **pull request** in Github, requesting that *your peers review your code* before it gets merged into the `master` branch.

- Select the 'master' button in the bottom bar of VS Code

![](images/tutorial-1/screenshot10.png)

- Select 'Create new branch...'

![](images/tutorial-1/screenshot9.png)


- Give your branch a unique name. For the purposes of this tutorial, just use your lastname.#

- Verify in the bottom bar that your new branch name is displayed instead of 'master'.


Step 1: Add your image
-----
Add an image to the `images/` directory. You can drag-and-drop from the file explorer on your operating system directly into VS Code.

![](images/tutorial-1/screenshot6.png)


Step 2: Modify index.html
-----
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

# Part 4: Commit and push your changes

![](images/tutorial-1/screenshot7.png)

Things to note:
- The 'M' next to index.html means we have `M`odified that file in our working tree
- The 'U' next you the image you added means this file is `U`ntracked - we haven't told Git to track changes to this file yet. The file is brand-new and has no history.


Step 1: 'Stage' your changes
------

Switch to the Git pane, and you'll see only the files with changes in your working copy.

![](images/tutorial-1/screenshot11.png)

- Press the '+' on the files you'd like to commit. Or, select '+' next to 'Changes' to add all changes.

![](images/tutorial-1/screenshot12.png)

Now, you should see:

![](images/tutorial-1/screenshot14.png)

Note: the 'U' next to the image has changed to an 'A' for `A`dded, now that we have added this file to Git.

Step 2: Commit your changes
----

Add a commit message:

![](images/tutorial-1/screenshot13.png)

Press the checkmark:

![](images/tutorial-1/screenshot15.png)

Step 3: Push your changes
-----

- Look in the bottom bar. You should see something like the following (it will say your branch name rather than master):
    
    ![](images/tutorial-1/screenshot16.png)
    
    This means you have 1 commit to push, and 0 commits to pull. If someone else was working on the same branch as you and pushed their changes, there would be a nonzero number of commits for you to pull.

- Press on the button pictured above in the bottom bar. It will automatically push and pull from the remote repository.

Part 4: Pull Request
=======

Step 1: Create the pull request
-----

If you pull up the [repository](https://github.com/Code4Community/git-tutorial) in a browser, you might see the following:

![](images/tutorial-1/screenshot17.png)

If so, you can click 'Compare & Pull request' and it save you a few clicks.

Otherwise:
- Go to the [repository homepage](https://github.com/Code4Community/git-tutorial)
- Click 'Pull Requests'
- Click 'New Pull Request'

You'll see something like this:

![](images/tutorial-1/screenshot18.png)

- 'base' is the branch you want you merge your changes *into*
- 'compare' is the branch your changes are currently on (this is the branch you created earlier)

So,

- All you should have to do is change the 'compare' branch to your branch, and click 'Create pull request'.
- Give your pull request a title and leave a comment with any issues you had
- Click 'Create pull request' (again)

Step 2: Getting your pull request reviewed
-----

For this repository, you need **at least two approvals** before you'll be able to merge your pull request into master.
- We encourage you to seek approvals from others completing the tutorial, and feel free to review others pull requests as well.
- One of the approvals must be @ndrewh, @maxdg99, or @adambricelis. Actual projects may or may not require reviews like this.
- Request your reviews
    
    ![](images/tutorial-1/screenshot20.png){:style="height: 50vh;"}


Until you have the required reviews, you'll see this:

![](images/tutorial-1/screenshot21.png){:style="width: 50vw;"}


Once you have the required approvals, your pull request will show this and you'll be able to merge it into master with one click :)

![](images/tutorial-1/screenshot19.png){:style="width: 50vw;"}


That's it!
===

You're done. Before you leave, ask people to review your request and we should be able to merge it in very quickly. You'll be able to see your changes live on https://code4community.github.io/git-tutorial/ once your changes get merged into master.


Feedback
====

If you have any feedback on this tutorial, feel free to create an issue on the Github repo, or let one of the exec board members (@maxdg99, @adambricelis, @ndrewh) know.
