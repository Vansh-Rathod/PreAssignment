// --> constants in math object
// console.log(Math.E);        // returns Euler's number
// console.log(Math.PI);       // returns PI
// console.log(Math.SQRT2);    // returns the square root of 2
// console.log(Math.SQRT1_2);  // returns the square root of 1/2
// console.log(Math.LN2);      // returns the natural logarithm of 2
// console.log(Math.LN10);     // returns the natural logarithm of 10
// console.log(Math.LOG2E);    // returns base 2 logarithm of E
// console.log(Math.LOG10E);   // returns base 10 logarithm of E

// --> number to integer
// console.log(Math.round(4.6));	// Returns x rounded to its nearest integer
// console.log(Math.ceil(4.1));	// Returns x rounded up to its nearest integer
// console.log(Math.floor(4.9));	// Returns x rounded down to its nearest integer
// console.log(Math.trunc(4.7));	// Returns the integer part of x (new in ES6)
// console.log(Math.sign(-4));	// Returns if x is negative, null or positive:

// console.log(Math.pow(2,3));

// console.log(Math.sqrt(169));

// console.log(Math.abs(-4));

// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));

console.log(Math.random()); // Returns a random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // Returns a random number between 0 and 9
console.log(Math.floor(Math.random() * 11)); // Returns a random number between 0 and 10
console.log(Math.floor(Math.random() * 100)); // Returns a random number between 0 and 99
console.log(Math.floor(Math.random() * 101)); // Returns a random number between 0 and 100
console.log(Math.floor(Math.random() * 10) + 1); // Returns a random number between 0 and 10
console.log(Math.floor(Math.random() * 100) + 1); // Returns a random number between 0 and 10

// console.log(Math.log(1));
// console.log(Math.log(0));
// console.log(Math.log(2));

// console.log(Math.log2(8));

// console.log(Math.log10(10));
// console.log(Math.log10(100));
// console.log(Math.log10(1000));

// --> Function returns a random number between min (included) and max (excluded)
function getRandInteger1(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// --> Function returns a random number between min and max both included
function getRandInteger2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandInteger1(10, 20));
console.log(getRandInteger2(10, 20));
