---
layout: page
title: Git Tutorial
permalink: /tutorial-1
---
# Tutorial 1: Git and Visual Studio

## Before we get started
* Download a modern browser (preferably [Chrome](https://www.google.com/chrome/){:target="_blank"} or [Firefox](https://www.mozilla.org/en-US/firefox/){:target="_blank"})
* Download [Visual Studio Code](https://code.visualstudio.com/download){:target="_blank"}
* You need a Github Account. Fill out the survey on our homepage with your Github username, so we can add you to our Github organization.


# Part 1: About Git

A 'repository' consists of two parts:

- a 'working tree': These are the files you have 'checked out' on your computer
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

Your history and the server (We use Github, but there are many services) might have differing histories. To sync our history with the history stored by the server, we will use two operations:

- **Push**: Push any additional commits from my local history on the *current branch* to the remote server. (If a remote branch does not exist with that name, VS Code will prompt you and it will be created on the remote server.)
- **Pull**: Pull any additional commits on the *current branch* from the remote server and store them in my local history. This also updates your **working tree**.

**You will never be able to directly push to master.** Therefore, before pushing your code you will have to checkout a new local branch (this is covered in the later parts of this tutorial.)



# Part 2: Cloning a repository

- Open Visual Studio Code, and open a new window (File -> New Window)

- Select the 'Git' menu.

![](images/tutorial-1/screenshot1.png)



