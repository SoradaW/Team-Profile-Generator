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
const { choices } = require("yargs");

// array to contain all employee objects to render HTML page
const employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// start manager questions
const managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the team manager's name?",
    default: 'Firstname Lastname',
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
    message: "What is the team manager's employee ID?",
    validate: function (answer) {
      if (answer <=0) {
        return console.log("A valid employee ID is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the team manager's email address?",
    default: 'manager@test.com',
    validate: function (answer) { 
      if (answer.length < 10) { 
        return console.log("A valid email address is required.") 
      }
      return true; //! there is a better validation for an email
    }
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is the team manager's office number?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid office number is required.")
      }
      return true;
    }
  },
]; 
// end of manager questions

// option to add an engineer, intern and to finish building the team
const confirmEmployee = [
  {
    type: 'confirm',
    name: 'conEmployees',
    message: "Would you like to add your team member?"
  }
];

const employeeRole = [
  {
    type: 'list',
    name: 'empRoleLists',
    message: "Would you like to add an Engineer or Intern to the team?",
    choices: ['Engineer', 'Intern']
  }
];

// engineer questions
const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: "What is your software engineer's name?",
    default: 'Firstname Lastname',
    validate: function (answer) {
      if (answer.length < 2) {
        return console.log("A valid name is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'engineerId',
    message: "What is your software engineer's employee ID?",
    validate: function (answer) {
      if (answer <=0) {
        return console.log("A valid employee ID is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "What is your software engineer's email address?",
    default: 'engineer@test.com',
    validate: function (answer) { 
      if (answer.length < 10) { 
        return console.log("A valid email address is required.") 
      }
      return true; //! there is a better validation for an email
    }
  },
  {
    type: 'input',
    name: 'engineerGitHub',
    message: "What is your software engineer's GitHub?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub is required.")
      }
      return true;
    }
  },
]; 
// end of engineer questions

// intern questions
const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: "What is your intern's name?",
    default: 'Firstname Lastname',
    validate: function (answer) {
      if (answer.length < 2) {
        return console.log("A valid name is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'internId',
    message: "What is your intern's employee ID?",
    validate: function (answer) {
      if (answer <=0) {
        return console.log("A valid employee ID is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "What is your intern's email address?",
    default: 'intern@test.com',
    validate: function (answer) { 
      if (answer.length < 10) { 
        return console.log("A valid email address is required.") 
      }
      return true; //! there is a better validation for an email
    }
  },
  {
    type: 'input',
    name: 'internSchool',
    message: "What is your intern's school?",
    default: 'Birmingham',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid school is required.")
      }
      return true;
    }
  },
]; 
// end of intern questions

// function to create a manager object
async function createManager() {
  let managerResponses = await inquirer.prompt(managerQuestions);

  // create new object from class and add to employee array
  let newManager = new Manager (
    managerResponses.managerName,
    managerResponses.managerId,
    managerResponses.managerEmail,
    managerResponses.managerOfficeNumber
  );

  employees.push(newManager); //adds new items to the end of an array

  console.log("Perfect! We've added a team manager: ", newManager);
};

// fucntion to create/add team members 
async function confirmAddsEmployee() {
  let confirmAddsEmployee = await inquirer.prompt(confirmEmployee);

  // The switch case statement is also used for decision-making purposes. 
  // In some cases, using the switch case statement is seen to be more convenient than if-else statements.
  switch (confirmAddsEmployee.conEmployees) {
    case false:
      console.log("Thank you for your input. Here are your team members: ", employees);
      console.log("Generating your HTML page next...");
      return;

    // if user would like to add another team member (Yes)
    case true:
      await createEmployee();
  };
};

// fuction to create employee / engineer or intern
async function createEmployee() {
  let employeeRoleLists = await inquirer.prompt(employeeRole);

  switch (employeeRoleLists.empRoleLists) {
    case 'Engineer':
      let engineerResponses = await inquirer.prompt(engineerQuestions);

      // create new object from class and add to employee array
      let newEngineer = new Engineer (
        engineerResponses.engineerName,
        engineerResponses.engineerId,
        engineerResponses.engineerEmail,
        engineerResponses.engineerGitHub
      );

      employees.push(newEngineer);
      console.log("Fantastic! We've added a new engineer to the team: ", newEngineer);

      await confirmAddsEmployee();
      break; // jumps out of a switch statement
    
    case 'Intern':
      let internResponses = await inquirer.prompt(internQuestions);

      // create new object from class and add to employee array
      let newIntern = new Intern (
        internResponses.internName,
        internResponses.internId,
        internResponses.internEmail,
        internResponses.internSchool
      );

      employees.push(newIntern);
      console.log("Fantastic! We've added a new intern to the team: ", newIntern);

      await confirmAddsEmployee();
  };
};

// main function to initialize program
// try catch finally in node.js handle runtime errors
// async makes a function return a Promise
async function init() {
  try {
    // prompt inquirer questions to gather info
    // info about manager role
    await createManager();

    // ask if to create team member
    await confirmAddsEmployee();

  } catch (error) {
    console.log(error);
  };

  // the render function will generate and return a block of HTML including templated div elements for each employee
  try {
    let renderHTML = render(employees);

    // create an HTML file using the HTML returned from the render function
    fs.writeFileSync('./docs/team.html', renderHTML);

    console.log('Success! Your HTML page has been generated in the output folder.')
  } catch (error) {
    console.log(error);
  }
};
// function call to initialize program
init();