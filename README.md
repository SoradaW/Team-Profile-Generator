# Team Profile Generator

## Object-Oriented Programming

This application is a Node command line application that dynamically generates the team member profile HTML webpage, that displays summaries for each person from the user's input. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [License](#license)
* [Questions](#review)

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/14-object-oriented-programming-challenge-demo.png)

Check out [here](https://) for live example.

## Installation

Here are some guidelines:

* Create new repository in GitHub, then `git clone` to your local.

* Create a `.gitignore` file and include `node_modules/` so that your `node_modules` directory isn't tracked or uploaded to GitHub.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Run `npm install` in order to install the following npm package.

  * The application use `Jest package` for running the unit tests.

  * `Inquirer package` for collecting input from the user. 

* Once you have `npm install` your dependencies, you can run the Node CLI application with `npm start` and you can run `npm test` at anytime.

* The application will be invoked by using the `node index.js` command.

## Usage

  * Code in `index.js` uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.

## Methodology

The dirctory structure of the application as follows:

```
lib/      // Employee classes and code to generate HTML 
src/      // Templates for main HTML <body> and employee <div>s
tests/    // Jest tests
```

* Create a command-line application that accepts user input.   
  * Create classes for each team member and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format. 

## Review

* A walkthrough video demonstrating the functionality of the application

![Demo](/images/.gif)

* A sample HTML file generated using the application click [here](https://)

* Any questions please send me an [email](sorada.wright@gmail.com)

## License

This project under the terms of MIT License

---
© 2023 | Sorada Wright | All Rights Reserved.
