const fruits = ["Banana", "Orange", "Apple", "Mango"];
const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];

// length
console.log(fruits.length);

// array to string
console.log(fruits.toString());

// at() function
console.log(fruits.at(2));

// join() gunction
console.log(fruits.join(" xyz "));

// pop()
console.log(fruits.pop());
console.log(fruits);

// push()
console.log(fruits.push("Grapes"));
console.log(fruits);

// shift()
console.log(fruits.shift());
console.log(fruits);

// unshift
console.log(fruits.unshift("Kiwi"));
console.log(fruits);

// concat() function
console.log(girls.concat(boys));
const childrens = girls.concat(boys, "Hydra");
console.log(childrens);

// splice() function
console.log(fruits.splice(2, 0, "Lemon", "Dragonfruit"));
console.log(fruits);
console.log(fruits.splice(2, 2, "Mango"));
console.log(fruits);

// slice() function
console.log(fruits.slice(1));
console.log(fruits.slice(3));
console.log(fruits.slice(1, 3));
console.log(fruits);
