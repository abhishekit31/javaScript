// console.log(x); // undefined
// console.log(getName); // [Function: getName] return the function

// var x = 10;

// function getName() {
//   console.log("Abhishek");
// }
// console.log(x); // 10
// console.log(getName); // [Function: getName] return the function

let person = {
  name: "Vishu",
  greet: function (age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  },
};
let person2 = {
  name: "Goldu",
};
// Using bind to create a new function with a bound `this`
let greetGoldu = person.greet.bind(person2, 22);

greetGoldu();

// output : Hello, my name is Goldu and I am 22 years old.
