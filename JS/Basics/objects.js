// creating a object
const person1 = {
  firstName: "Ram",
  lastName: "Gupta",
  age: 25,
  eyeColor: "blue",
};

const person2 = new Object();

// accessing object properties
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.eyeColor);
console.log(person1["firstName"]);

const x = person1;

// manipulating object properties
person1.eyeColor = "green";
x.age = 10;
console.log(person1.age);
console.log(person1.eyeColor);

// adding new properties
person1.phone = 1234567891;
console.log(person1);

// deleting properties
delete person1.phone;
console.log(person1);

// nested objects
const Obj1 = {
  name: "Krishna",
  netWorth: 500000000,
  myCars: {
    car1: "Buggati",
    car2: "Bentley",
    car3: "Mclaren",
    car4: "Lamborgini",
  },
};

// accessing nested object values
console.log(Obj1);
console.log(Obj1.myCars);
console.log(Obj1.myCars.car1);
console.log(Obj1.myCars["car2"]);
console.log(Obj1["myCars"]["car3"]);

let v1 = "myCars";
let v2 = "car4";
console.log(Obj1[v1][v2]);

// Objects with methods as values
const Employee = {
  empName: "Tony Stark",
  empId: 1234,
  contact: 9567347561,
  age: 30,
  salary: 50000,
  idDescription: function () {
    return this.empName + " ID is " + this.empId;
  },
};

// accessing methods of objects
console.log(Employee);
console.log(Employee.idDescription());

// adding methods to the object
Employee.salaryDescription = function () {
  return this.empName + " has Rs." + this.salary + " Salary";
};

console.log(Employee.salaryDescription());
