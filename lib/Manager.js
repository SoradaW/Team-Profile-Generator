// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Employee constructors
    super(name, id, email);

    // constructor unique to Manager
    this.officeNumber = officeNumber;

    // overridden "Employee role"
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;