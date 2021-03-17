# Coding Assessment

## Description

This web app logs calculations as they happen through calculator and shares those calculations with everyone connected to the app.

### Github Link

https://github.com/satyakumaritekela/calculator_logs

### Heroku Link

<https://star-wars-explorer-red-space.herokuapp.com/>

### Prerequisites
It needs NodeJS to be preinstalled in the system

## Directory structure

Directory structure of the project is as given

`client` - contains the react application

`client/src` - source folder contains all of our code

`client/src/components` - Components directory has all of our components, each component has its typescript file

`client/src/routes` - Routes is a directory which contains our all of our routes to navigate to different component

`client/src/redux` - Redux is a directory which contains our all the folders necessary for redux state management

`src` - contains the server side node, express based application

`src/controllers` - contains the controllers required for the express application

`src/models` - contains the models required for the express application


## Getting Started

* Clone the repository from the GitHub link provided below
  - https://github.com/satyakumaritekela/Star-Wars-Explorer.git

* Copy the .env file that has been provided

* Install the node modules using the following command for both client and server (from the Star-Wars-Explorer - directory)
  for client - ```npm run client-install```
	for server - ```npm install```

* Start the application by using the following command
  - ```npm run client-build```
	- ```npm run dev```
  - It will run on your `http://localhost:3000/`


## Built with

* [React](https://reactjs.org/): It is a JavaScript view library to develop frontend. It helps us to create attractive single page applications. 

* [Visual Studio code](https://code.visualstudio.com/): It is a code-editor to built, debug web, and cloud based applications.

* [Node.js](https://nodejs.org/en/download/): Open-source, cross-platform, javascript runtime environment. 

* [Express](https://expressjs.com/): It is a web application framework for Node.js for the developent of backend, that handles all the interactions between the frontend and database ensuring a smooth tranfer of data to the end user.

## API Info

* Star Wars API - It is an open API that returns data about the Star Wars films.
  link - <https://swapi.dev/>

## Deployment

App is deployed in heroku with automatic deploys from the github repository. On git commit build gets executed and branch is deployed to the server

## Sources Used

Reactjs.org - <https://reactjs.org/>

Material-UI - <https://material-ui.com/>