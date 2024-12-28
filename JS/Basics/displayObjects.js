const personObj = {
  name: "John",
  age: 25,
  city: "Mumbai",
};

// displaying object properties by name
document.getElementById("display1").innerHTML =
  personObj.name + ", " + personObj.age + ", " + personObj.city;

// displaying properties in loop
let text = "";
for(let x in personObj){
    text = text + personObj[x];
}
document.getElementById("display2").innerHTML = text;

// displaying objects using array or object.values()
const myPersonObjArray = Object.values(personObj);
document.getElementById("display3").innerHTML = myPersonObjArray;

// displaying objects using json stringify
const personObjJsonString = JSON.stringify(personObj);
document.getElementById("display4").innerHTML = personObjJsonString;
