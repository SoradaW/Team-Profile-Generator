// internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// external packages
const inquirer = require("inquirer"); 
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { functionExpression } = require("@babel/types");

// array to contain all employee objects to render HTML page
const employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// start manager questions
const managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is team manager's name?",
    default: 'Fisrtname Lastname',
    validate: function (answer) {
      if (answer.length < 2) {
        return console.log("A valid name is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is team manager's employee ID?",
    default: '123',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid employee ID is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is team manager's email address?",
    default: 'email@test.com',
    validate: function (answer) { 
      if (answer.length < 10) { 
        return console.log("A valid email address is required.") 
      }
      return true; //! will need a better validation for an email
    }
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is team manager's office number?",
    default: '12A',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid office number is required.")
      }
      return true;
    }
  },
]; 
// end of manager questions

//module.exports = {
//  manager: managerQuestions,
//};

// function to create a manager object
async function createManager() {
  let managerResponses = await inquirer.prompt(managerQuestions);
  console.log("Great! We've added a team manager: ");
};

// main function to initialize program
// try catch finally in node.js handle runtime errors
// async makes a function return a Promise
async function init() {
  try {
    // prompt inquirer questions to gather info
    // info about manager role
    await createManager();

  } 
    catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();