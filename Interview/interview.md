# let VS var inside the for loop

let is block scope where as the var is a function scope.

let is creating new variable per iteration where as var is not.

let is accesible outside the for loop where as var is not accesible.

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}
console.log(i); // ReferenceError: i is not defined

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2
  }, 3000);
}

// by using var
for (var i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}
console.log(i); // 3

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3 3 3
  }, 3000);
}
```

# Difference between synchronous and Asynchronous

## Synchronous Javascritp:-

code excute line by line in a blocking manner.

it consume time while its wait for other process to complete.

it is slower.

```javascript
console.log("start");
for (let i = 0; i < 3; i++) {
  console.log("Processing", i);
}
console.log("end");
```

## Asynchronous Javascritp:-

code doesn't execute line by line manner means it doesn't wait for time consuming task.

it is faster as compare to the synchronus javasript.

```javascript
console.log("start");
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Processing", i);
  }, 3000);
}
console.log("end");
```

# what is closure ?

Closure is something in javascript which is bined together to its lexical environement.

A function along with lexical environment form a closure.

```javascript
function outer() {
  let outerVariable = 10;
  function inner() {
    console.log(outerVariable); // 10
  }
  inner();
}
outer();
```

## uses of closures :

    1. Data Privacy
    2. Callback
    3. Event Handling

# what is lexical environment ?

lexical environment in javascript is a data strucutre that store a varibale and function in a given scope.

whenever the execution constext is crated the lexical environement is also crated.

```javascript
function outer() {
  let outerVariable = 10;
  function inner() {
    console.log(outerVariable); // 10
  }
  inner();
}
outer();

// we can say that inner function is lexicaly seated inside the outer function and outer function is lexicaly seated inside the global function.
```

# what is scope chaining ?

it is nothing but chain of all the lexical environment and its reference.

```javascript
let globalVaribale = 10;
function outer() {
  let outerVariable = 20;
  function inner() {
    let innerVariable = 30;
    console.log(globalVaribale); // 10
    console.log(outerVariable); // 20
    console.log(innerVariable); // 30
  }
  inner();
}
outer();
```

# What is Temporal Dead Zone(TDZ) ?

Teporal dead zone is nothing in javascript but it's a time period to declare the variable till its initialization is known as temopral dead zone.

It's exist only the varibale declared with let and const.

Accessing the varible inside the temopral dead zone is giving us ReferenceError

### Accessing variable before it's initialization

```javascript
console.log(x); // Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10
```

### TDZ in let and var

```javascript
console.log(x); // Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

console.log(y); // undefined
var y = 20;
console.log(y); // 20
```

### TDZ in const

```javascript
console.log(x); // Cannot access 'x' before initialization
const x = 10;
console.log(x); // 10
```

# what is callback ?

Callback is a function in javascript which is passed an argument to another function.

It allow code to excute after some oeprtation.

```javascript
function Display() {
  setTimeout(() => {
    console.log("Abhishek");
  }, 2000);
}
Display();
// output : print Abhishek after 2 second
```

# Differnece between async and await

## async

async is a keyword in javascript which is used before the function to make this function as async function.

It always return the promise whether its return explictly or not.

```javascript
async function fetchData() {
  return "fetching the data...";
}
console.log(fetchData());
// output : Promise { 'fetching the data...' }
```

## await

await is keyword that is only used inside the async function.

It pause the excution utill the promise resolved.

It makes asynchronus code looks synchronus and more readable.

```javascript
async function fetchData() {
  return "fetching the data...";
}
async function getMessage() {
  let message = await fetchData();
  console.log(message);
}
getMessage();

// output : fetching the data...
```

# What is hoisting ?

Hoisting in a javascript is a phenomenon that provide a facility to access the variable and function before it's initalization.

```javascript
console.log(x); // undefined
console.log(getName); // [Function: getName] return the function here as well it doesn't return the undefined.

var x = 10;

function getName() {
  console.log("Abhishek");
}
console.log(x); // 10
console.log(getName); // [Function: getName] return the function
```

# What is promise ?

Promise in a javascript is an object that represent the eventual completion of task.

It has three state `pending` `fullfilled` and `reject`.

`pending` → The async operation is still in progress.

`fulfilled` → The operation was successful (resolved).

`rejected` → The operation failed (rejected).

It is used to handle the async task(no `callbackHell`)

### Creating a Basic Promise

```javascript
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to test rejection
  setTimeout(() => {
    if (success) {
      resolve("✅ Promise resolved!");
    } else {
      reject("❌ Promise rejected!");
    }
  }, 2000);
});
```

### Handling Promises with .then() and .catch()

```javascript
myPromise
  .then((message) => {
    console.log(message); // ✅ Executes if resolved
  })
  .catch((error) => {
    console.log(error); // ❌ Executes if rejected
  })
  .finally(() => {
    console.log("🎉 Promise completed (success or failure)");
  });
```

# Manipulating this with call, apply, and bind

## call() Method:

The `call()` method allows you to invoke a function and explicitly set the value of `this`.

You can also pass arguments to the function individually.

by using `call()` function we can do the function borrowing.

```javascript
let person = {
  name: "Vishu",
  greet: function (age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  },
};
let person2 = {
  name: "Goldu",
};

person.greet.call(person2, 22);

// output : Hello, my name is Goldu and I am 22 years old.
```

## apply() Method :

The `apply()` method is similar to `call()`, but instead of passing arguments individually, you pass them as an array.

```javascript
let person = {
  name: "Vishu",
  greet: function (age, occupation) {
    console.log(
      `Hello, my name is ${this.name} and I am ${age} years old ${occupation}`
    );
  },
};
let person2 = {
  name: "Goldu",
};

person.greet.apply(person2, [22, "Developer"]);

// output : Hello, my name is Goldu and I am 22 years old Developer.
```

## bind() Method :

`bind()` method retuns the function but it does not invoke immediately.

The function which is return by bind method we can invoke it by name.

```javascript
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
```

# Prototypal Inheritance

prototypal inheritance is a mechanism by which javascript object inherit all the features and method from other.

```javascript
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
```

## Prortotype

In javascript every object has an internal property called prototype. it is commonly acces via the `__proto__` property.

## Inheritance

In javascript one object can inherit the property and method from their prototypes.

if the property or method is not found in the object itself. Javascript looks for it on the object prototype.

if still not found to their it continue searching upto the prototype chain untill it reaches till null.

## why us prototype inheritance important

1. It allows object to reuse property and merthods from other object.
2. It supports dynamic behavior where object can ecxtends at Runtime.

## What is prototype chaining.

The prototype chain is a mechanism that allows object to inherit property and method from their prototype.

Each object has a reference to another object called its prototype

If an object doesn't have a property or method directly on it, Javascript will look it up the prototype chain.

```javascript
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

// this is the example of prototypal inheritance
```
