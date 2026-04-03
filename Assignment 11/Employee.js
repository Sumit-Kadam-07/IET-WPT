class Employee {
  constructor(firstName, lastName, email, desi, basicSal) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.desi = desi;
    this.basicSal = basicSal;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setEmail(email) {
    this.email = email;
  }

  setDesignation(desi) {
    this.desi = desi;
  }

  setBasicSalary(basicSal) {
    this.basicSal = basicSal;
  }

  // getters

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getDesignation() {
    return this.desi;
  }

  getBasicSalary() {
    return this.basicSal;
  }
  display() {
    console.log("First Name:", this.firstName);
    console.log("Last Name:", this.lastName);
    console.log("Email:", this.email);
    console.log("Designation:", this.desi);
    console.log("Basic Salary:", this.basicSal);
  }
}

let emp1 = new Employee(
  "Sumit",
  "Kadam",
  "pratik@gmail.com",
  "Software Engineer",
  50000
);

emp1.display();
