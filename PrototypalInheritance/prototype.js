// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello ${this.name}`);
// };

// const person1 = new Person("vishu");
// const person2 = new Person("goldu");

// person1.greet();
// person2.greet();

// Person.prototype.sayGoodBye = function () {
//   console.log(`bye ${this.name}..!`);
// };
// person1.sayGoodBye();
// person2.sayGoodBye();

// const p1 = {
//   fname: "abhi",
//   lname: "singh",
//   fullName: function () {
//     return `${this.fname} ${this.lname}`;
//   },
// };

// const p2 = Object.create(p1);
// p2.__proto__.fname = "vishu";
// p2.lname = "kumar";
// console.log(p1.fullName());

// console.log(p2.__proto__);

// prototypal inheritance
const p1 = {
  name1: "Abhishek",
};
// prototypal inheritance
const p2 = {
  name2: "goldu",
  __proto__: p1,
};
// prototypal inheritance
const p3 = {
  name3: "vishu",
  __proto__: p2,
};
