const fruits = ["Banana", "Orange", "Apple", "Mango"];
const months = ["Jan", "Feb", "Mar", "Apr"];
const points = [40, 100, 1, 5, 25, 10];

console.log(fruits.sort());
console.log("Original Array: ", fruits);

console.log(fruits.reverse());
console.log("Original Array: ", fruits);

console.log(months.toSorted());
console.log("Original Array: ", months);

console.log(months.toReversed());
console.log("Original Array: ", months);

console.log(points.toSorted(function(a, b){
    return a - b;
}));
console.log("Original Array: ", points);

console.log(points.toSorted(function(a, b){
    return b - a;
}));
console.log("Original Array: ", points);