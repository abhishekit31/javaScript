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

Abstarction :- hiding the details like (fetch)
Encapsulation :- warap up a data into a capsule
Inheritance :- inherit all the property of parent
Polymorphism :- showing different different behaviour in it's life cycyle.
