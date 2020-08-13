# Node.js and npm Tutorial

## Before we get started
- Complete the Javascript tutorial and all previous tutorials
- [Download Node.js and npm](https://nodejs.org/en/download/)
- Don't hesitate to stop and ask questions, especially if you're stuck!

## Overview
- Part 1: About Node.js and npm
- Part 2: Getting Started with npm
- Part 3: Initially Starting A Local Server


## Part 1: About Node.js and npm
Node.js is a runtime environment for JavaScript that is used in many fields, including web development. All Node.js files have a .js file extension.

A unique aspect of Node.js is that it is _asynchronous_. This makes Node.js unique in the way that it can handle requests.
- Take, for example, a request to save an object to a database: 
    - Without the asynchrony of Node.js, the program would have to wait for this request to complete before proceeding to other requests.
    - Asynchronous operations allow programs to immediately go to other requests. The original request will     simultaneously run until its completion.
    - This process helps to save memory and increase speed, especially with large-scale web applications

npm (node package manager) works with Node.js to download and manage software packages. Programmers often use software packages to include methods that would be challenging or time-consuming to code on their own. For example, a user may include a sorting package to quickly order an array of objects. Users run npm commands from their terminal. These are a few commonly used npm commands (note: this list is not comprehensive):
- `npm install <package>` : Installs a package (package name is placed after install)
- `npm outdated` : Checks if any of your packages are outdated
- `npm install -g npm` : Updates npm
- `npm ls` : Displays your packages
- `npm start` : Runs the `package.json`'s start attribute

## Part 2: Getting started with npm
Start by creating a new Node.js file titled `tutorial.js`. If you haven't already done so, open the VS Code terminal by navigating to Terminal => New Terminal (or, alternatively, Ctrl+Shift+\`). Now, enter the command `npm init` in the terminal. `npm init` will create a location (specifically, a package.json file) to store your project's npm package references. Press enter through each of the prompts until you reach the entry point prompt. Ensure that the entry point is `tutorial.js`, and continue to press enter until the command completes. Completing the command should add a `package.json` file to your current folder.

Next, you need to install Express. Express is a framework that helps to make web development much easier. Run the command `npm install express --save`. Successfully completing this command will add a `package-lock.json` file to your current folder. The `package-lock.json` helps to keep track of which version of which module you are using. Your `package.json`'s dependencies should also have been changed to reflect that you installed Express:

![Express in package.json](packageJsonPicture.png)


## Part 3: Starting A Local Server
You're now ready to start running your own local server. Copy the following lines into your program:

    var express = require('express');
    var app = express();
The first line gives you access to the express module, and the second will allow you to use some helpful methods from that module. Next, add these lines:

    app.get('/', function (req, res) {
        res.send('Your local server is running!');
    });
    app.listen(3000, function () {
        console.log('tutorial.js is now listening on port 3000');
    });
The `app.get` function allows a GET request for your server to respond with  "Your local server is running!" A GET method is one of the 7 HTTP request methods. It is used to retrieve data from a source. The `app.listen` function runs your server and begins listening on port 3000. This server is local, meaning that it can only be accessed by your computer.

You're now ready to start running your server locally! Entering the command `node tutorial.js` in the terminal will run your tutorial.js file. Navigate to [http:localhost:3000](http:localhost:3000), and your page should look like this:

![Initial server screenshot](InitialServer.png)


It's good that you were able to get your server running, but we should definitely add a bit to the page. Let's add some HTML to make it a little more interesting. Replace your `app.get` funciton with the following code:

    app.get('/', function (req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<!DOCTYPE html>' +
            '<html lang="en">' +
            '  <head>' +
            '     <title>Ohio State</title>' + 
            '  </head>' +
            '   <body>' +
            '       <h1>' +
            '           THE Ohio State University' +
            '       </h1>' +
            '   </body>' +
            '</html>'
        );
        res.end();
    });

`res.writeHead` provides a 200 success code and also ensures that the server recognizes we're adding HTML. The res.write statement allows the server to send the provided HTML code as the GET response. Try to complete the rest of the site using your HTML work from Tutorial 2. When you're finished, the page should look like this:

![Node.js final page screenshot](FinishedNodePage.png)

Congratulations, you finished the tutorial and were able to successfully start a local server with Node.js and npm.
