// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Employee constructors
    super(name, id, email);

    // constructor unique to Intern
    this.school = school;

    // overridden "Employee role"
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
