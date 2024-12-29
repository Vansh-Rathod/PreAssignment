const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

console.log(typeof(fruits));
console.log(Array.isArray(fruits));
console.log(fruits);
console.log(fruits.toString());

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits.push("Grapes");
console.log(fruits);
fruits[fruits.length] = "Blackberry";
console.log(fruits);

fruits[10] = "Guava";
console.log(fruits);

const points = new Array();
const myPoints = [];