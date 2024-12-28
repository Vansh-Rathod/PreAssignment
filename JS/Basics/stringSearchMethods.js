let text1 = "Please locate where 'locate' occurs!";
let text2 = "The rain in SPAIN stays mainly in the plain";
let text3 = "Hello world, welcome to the universe.";

console.log(text1.indexOf("locate"));
console.log(text1.lastIndexOf("locate"));
console.log(text1.lastIndexOf("me"));
console.log(text1.indexOf("locate", 8));

console.log(text1.search("cate"));

console.log(text2.match("ain"));
console.log(text2.match(/ain/g));
console.log(text2.match(/ain/gi));

console.log(text3.includes("world"));
console.log(text3.includes("wow"));

console.log(text3.startsWith("Hello"));
console.log(text3.startsWith("lo"));

console.log(text3.endsWith("verse."));
console.log(text3.endsWith("uni"));
