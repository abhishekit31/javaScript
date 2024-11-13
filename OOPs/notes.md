# javaScript and classes

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
const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.
```

## OOPs (Object oriented propgramming)
