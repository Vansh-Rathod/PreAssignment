const marks = [45, 4, 9, 16, 25];
const cars = ["BMW", "Volvo", "Mini"];
let language = "JavaScript";

const person = {
  firstName: "Krishna",
  lastName: "Yadav",
  age: 25,
  contact: 1234567891,
  address: "Ahmedabad",
  eyeColor: "Blue",
};

// forEch loop
// marks.forEach(myFunction);
// function myFunction(value){
//     console.log(value);
// }

// for-in loop
// for (let x in person) {
//   console.log(`${x} - ${person[x]}`);
// }

// for-of loop
for(let x of marks){
    console.log(x);
}

for(let x of cars){
    console.log(x);
}

for(let x of language){
    console.log(x);
}

