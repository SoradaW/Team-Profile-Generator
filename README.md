# Team Profile Generator

## Object-Oriented Programming

This project is to create a command-line application that dynamically generates the team profile HTML webpage that displays summaries for each person from a user's input. Check out [here](https://) for an example.

## Table of Contents

* [Instructions](#instructions)
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Questions](#review)

## Instructions
 
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

---

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/14-object-oriented-programming-challenge-demo.png)

---

## Installation

Here are some guidelines to help you get started:

The application use [Jest package](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer package](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

---

## Review

* A walkthrough video demonstrating the functionality of the application

![Demo](/images/.gif)

* A sample HTML file generated using the application click [here](https://)

* Any questions please send me an [email](sorada.wright@gmail.com)

## License

This project under the terms of MIT License

---
© 2023 | Sorada Wright | All Rights Reserved.
