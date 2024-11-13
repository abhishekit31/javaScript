# OOPs (Object oriented programming)

- it is a programming paradigms (mean the structure or style of code)

## Classes

- In JavaScript, classes provide a way to create reusable objects with methods and properties. Classes were introduced in ES6 and make it easier to work with object-oriented programming (OOP) principles.

```javascript
class Person {
  // Constructor is a special method to initialize objects
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method for the class
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of the Person class
const person1 = new Person("Abhishek", 21);
person1.greet(); // Hello, my name is Abhishek and I am 30 years old.
```

## Object

- Colelction of properties and method
- toLowercase
- toUppercase

```javascript
const person = {
  name: "Abhishek",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};
console.log(person.name);
console.log(person.greet());
```

## parts of OOPs

- Object literal

- Constructor function
- Protoytypes
- Classes
- Instances(new, this)

## Four Pillars of OOPs

- Abstarction :- hiding the details like (fetch)
- Encapsulation :- warap up a data into a capsule
- Inheritance :- inherit all the property of parent
- Polymorphism :- showing different different behaviour in it's life cycyle.

```javascript
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.inncreament = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is : ${this.score}`);
};
const user1 = new createUser("vishu", 10);
const user2 = new createUser("goldu", 12);

user1.increament();
user1.printMe();
```

## what happens behinf the scene when the "new" keyword is used

- A new object is created : the new keyword initiate the creation of new javascript object.

- A prototype is linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to the properties and method defined on the constructor's prototype.

- The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return values is specified from the constructor, javascript assumres this, the newly created object, to be intended return value

- The new object is returned : After the cinstructor function has been called, if it doesn't return a non-primitive value(object, array, function etc..) the newly created object is returned.
