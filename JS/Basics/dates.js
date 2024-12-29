const date1 = new Date();
console.log(date1);

const date2 = new Date("2015-03-25");
console.log(date2);

const date3 = new Date("2015-03");
console.log(date3);

const date4 = new Date("03/25/2015");
console.log(date4);

console.log(date1.getTime());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDay());
console.log(date1.getDate());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log(date1.getMilliseconds());