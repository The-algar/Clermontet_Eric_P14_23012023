# HRNET: Employee Records Management Application

![made-with-create-react-app](https://user-images.githubusercontent.com/75996200/166201532-1a68d09e-7f75-4106-ba2c-ac047ccc4cc4.svg)

## Introduction

HRNET is an employee records management application that allows users to add new employees through a form and access a list of all employees. The application features a table that enables users to search, sort, and control the number of data displayed per page.

## Goals

The goals of this project are to modernize the application and reduce technical debt by migrating a jQuery library to React and implementing a state management system. Additionally, the project aims to create a reusable React component and publish it as an npm package.

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [react](https://reactjs.org/) v18.2.0
- [react-dom](https://fr.reactjs.org/docs/react-dom.html)v18.2.0
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) v6.8.0
- [redux](https://redux.js.org/introduction/getting-started) v4.2.1
- [react-redux](https://react-redux.js.org/introduction/getting-started) v8.0.5
- [redux/toolkit](https://redux-toolkit.js.org/introduction/getting-started) v1.9.2
- [redux-thunk](https://redux.js.org/usage/writing-logic-thunks) v2.4.2
- [firebase](https://firebase.google.com/) v9.17.1
- [styled-components](https://styled-components.com/) v5.3.6
- [oc-p14-simple-react-modale](https://www.npmjs.com/package/oc-p14-simple-react-modale)v0.1.0
- Recommended IDE : [Visual Studio code](https://code.visualstudio.com/)

## Prerequisites`

To get started with the application, you need to have Git, Node.js, and npm installed on your machine.

- [Git](https://git-scm.com/) to clone repositories
- [Node.js](https://nodejs.org/en/) to run `npm` commands
- [Npm](http://nodejs.org/download/) to run application

## Install and run application

Clone the repository: https://github.com/The-algar/Clermontet_Eric_P14_23012023
Navigate to the cloned repository.
Run npm install to install dependencies.

### Install back-end

This project uses [Firebase](https://firebase.google.com/) for database management

Create a new Firebase project and start a new collection named 'employees' before launching the application.
Copy the firebaseConfig constant from your Firebase project settings.
Create a .env file at the project root with the environment variable names and your firebaseConfig values. Don't forget to add the .env file to .gitignore.
Run npm start. The application will run in development mode at http://localhost:3000. see details below.

**1**. First you need to create a new project on **firebase** and start a new collection named **_'employees'_** (you can use collection example with the **json** file found in **'/src/datas/employees.json'**)

**2**. Next, look at and copy the **firebaseConfig** constant (you can find it in your Firebase project settings)

**3**. In this project you should find a **.env** file with **environment variable names**, so you need to create your own **.env** file at project root with the environment variable names and your firebaseConfig values (don't forget to add **'.env'** file to **'.gitignore'**)

### Install and Launch the Application

- [ ] Clone the repository: https://github.com/The-algar/Clermontet_Eric_P14_23012023
- [ ] Navigate to the cloned repository with `cd Clermontet_Eric_P14_23012023`
- [ ] Run npm install to install dependencies.
- [ ] Run npm start. The application will run in development mode at [http://localhost:3000](http://localhost:3000).

## npm Package

The project also aims to create a reusable React component and publish it as an npm package. You can find the npm package and GitHub repository at:

- [npm] npm-package (https://www.npmjs.com/package/oc-p14-simple-react-modale)
- [github] npm-package GitHub repository (https://github.com/The-algar/OC-P14-REACT-MODALE)

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

This project was developed as part of the OpenClassrooms Front-End Developer Path.
The idea for this project came from the need to create a React app with a simple and customizable modal component.
Thank you for using this modal component!
