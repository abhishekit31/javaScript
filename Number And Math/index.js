const num = 400;

//crate number by using new keyword
const number = new Number(500);
console.log(num); // 400
console.log(number); // [Number: 500]

// num = 700; // not allowed
// console.log(num);

let stringNum = console.log(number.toString());
console.log(num.toFixed(2));

// console.log(Math.floor(Math.random() * 10 + 1)); // generate the random number between 1 to 10

let min = 10;
let max = 20;

console.log(Math.floor(Math.random(max - min) * 10) + min); // generate the random number between 10 to 20

let num1 = 20.1;
console.log(Math.ceil(num1)); // (21) it will log the ceil value

console.log(Math.floor(num1)); //(20) it will log the floor value
