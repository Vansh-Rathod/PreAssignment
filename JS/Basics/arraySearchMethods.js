const fruits = ["Apple", "Orange", "Grapes", "Apple", "Mango", "Orange", "Apple", "Dragonfruit"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Kiwi"));
console.log(fruits.indexOf("Orange", 2));

console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.lastIndexOf("Apple", 5));

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Guava"));
console.log(fruits.includes("Mango", 5));

console.log(fruits.find(myFunction));
function myFunction(value){
    return value == "Orange";
}

console.log(fruits.findIndex(myFunction));

console.log(fruits.findLast(myFunction));

console.log(fruits.findLastIndex(myFunction));