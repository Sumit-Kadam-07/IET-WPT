

function Person(name, age){
    this.name = name;
    this.age = age;
}

function Employee(name, salary){
    this.name = name;
    this.salary = salary;
}

/* Prototype function */

Person.prototype.print = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
}

Employee.prototype.print = function(){
    console.log("Name: " + this.name + " Salary: " + this.salary);
}

/* Objects */

let p1 = new Person("Rahul",22);
let e1 = new Employee("Amit",50000);



p1.print();
e1.print();

