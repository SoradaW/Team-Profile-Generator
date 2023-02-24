// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Employee constructors
    super (name, id, email);

    // constructor unique to Engineer
    this.github = github;

    // overridden "Employee role"
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;