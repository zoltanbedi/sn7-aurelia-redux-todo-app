# Todo App example with SN7, Aurelia and Redux

This example is simple todo app built with Aurelia+Redux upon Sense/Net ECM which has been prepared to demonstrate how to use the new Sense/Net ECM related libraries [sn-client-core](https://github.com/SenseNet/sn-client-core)
and [sn-redux](https://github.com/SenseNet/sn-redux). The app and a steps of the related tutorial are based on two awesome Redux courses of Dan Abramov: 
[Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) and [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux). 
These two courses are extremely helpful and essential, recommended for everyone who is interested in building scalable apps with [Redux](http://redux.js.org/).

## Quick start

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=6.0* with NPM 4 or Yarn.

```shell
- git clone https://github.com/B3zo0/sn7-aurelia-redux-todo-app.git
- cd sn7-aurelia-redux-todo-app
- npm install # or: yarn install
- npm start # or: yarn start
```
This command starts the webpack development server that serves the build bundles.
You can now browse the app at http://localhost:8080 (or the next available port, notice the output of the command). Changes in the code
will automatically build and reload the app.

## Related documents

* [Redux](http://redux.js.org/docs/introduction/)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Aurelia](http://aurelia.io/)

This project was generated with [aurelia-cli](https://github.com/aurelia/cli).

## Build

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm start -- build
```

To build 

To test either the development or production build execute:

```shell
npm start -- serve
```

The production bundle includes all files that are required for deployment.
