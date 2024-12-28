let text1 = "HELLO WORLD";
let text2 = "Apple, Banana, Kiwi";
let text3 = "hello";
let text4 = "world";
let text5 = "xyz";
let text6 = "              hey there !                 ";
let text7 = "Please visit Microsoft! and Microsoft!";

console.log(text1.length);

console.log(text1.charAt(0));
console.log(text1.charCodeAt(0));
console.log(text1.at(0));
console.log(text1[1]);

console.log(text2.slice(7));
console.log(text2.slice(7, 13));
console.log(text2.slice(-12)); // position start from end
console.log(text2.slice(-12, -6));

console.log(text2.substring(7, 13));

console.log(text2.substr(7, 6));
console.log(text2.substr(7));
console.log(text2.substr(-4));

console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

let concatText = text3.concat(" ", text4, text5);
console.log(concatText);

console.log(text6.trim());
console.log(text6.trimStart());
console.log(text6.trimEnd());

console.log(text1.repeat(3));

console.log(text7.replace("Microsoft", "HYDRA"));
console.log(text7.replace("Microsoft", "HYDRA"));