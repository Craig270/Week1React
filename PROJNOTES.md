# Week-13-React

Research:

What are some competitors/alternatives to React? What makes them different? List at least 2.

Angular 2 - Is a javascript frame work that allows you to build single page applications. Outa the box has a router and supports forign validiation - used to control the complete experiance..to control the navication between pages..control everything the user does.ReactJS does not do this stuff right out of the box.

Vue.js - Look this one up

InfernoJS - ANother one to look up

What is React's virtual DOM, why is it important, and how does it work?

--What is Webpack and what problem does it solve?
A tool that allows a developer to bundle all assets of a project into a single file. That file then gets imported into your HTML pages that you're building on. It can also transform your code, an example of this is compiling Sass code.Can load many plug-in to really talior it for what you want or need it to do. Can transform ES6 code to ES5 code with the Bable plug in.

--What is your favorite thing you learned this week?

I totally see now how last week when we knew nothing about breaking up all your code into its own file makes coding as a group a nightmare! That is exactly what happened to us last week trying to code on the same project together. Now that I have a better understanding of having all the elemnts of your program in it's own file could make coding a project as a group much easier.
Development dependencies can be thought of as something needed to make what you are running actually work.
--save-dev : INstall as a develment dependasiy -- don't deplay them if you're deploying your application, leave out all the development dependencies, only install the production dependencies so that we're not installing something on our deployment server that we don't need.

Use this command to create a react app:
npx create-react-app {test-app} - {} inside this is the name of your app.

npm nodemon install -- will allow you to make updates to the running npm start page without having to stop the server and restart iut.

Some usefull commands for building a live server:
npm install -g live-server
live-server index.html is NO GOOD; instead,
live-server --entry-file-index.html

```

```

Coding Steps:

Using create-react-app, create a new React project.

Create a LoginForm component that should contain username and password input fields, an h3 that says Log In, and a border.
Style the component using the default generated css file.

Create a Navigation component that contains links styled like a navbar. The links don’t have to go anywhere.

Put the Navigation component at the top of the page and the LoginForm in the center of the page.

```

```
