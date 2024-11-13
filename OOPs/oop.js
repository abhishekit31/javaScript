// ========Object literal========
const person = {
  name: "Abhishek",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};
console.log(person.name);
console.log(person.greet());

// ========Constructor function========
function User(userName, password) {
  this.userName = userName;
  this.password = password;
  this.greet = function () {
    console.log(`Welcome ${this.userName}`);
  };
}
const user1 = new User("Goldu", 123);
const user2 = new User("Vishu", 23556);
console.log(user1);
console.log(user2);
