# let VS var inside the for loop

1. let is block scope so that where as the var is a function scope.
2. let is creating new variable per iteration where as var is not.
3. let is accesible outside the for loop where as var is not accesible.

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

1. code excute line by line in a blocking manner.
2. it consume time while its wait or other process to complete.
3. it is slower.

```javascript
console.log("start");
for (let i = 0; i < 3; i++) {
  console.log("Processing", i);
}
console.log("end");
```

## Asynchronous Javascritp:-

1. code doesn't execute line by line manner means it doesn't wait for time consuming . task.
2. it is faster as compare to the synchronus javasript

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

1. closure is something in javascript which is bined together to its lexical environement.
2. A function along with lexical environment form a closure.

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

lexical scope in javascript is a data strucutre that store a varibale and function in a given scope.

whenever the execution constext is crated the lexical environement is crated.

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

Teporal dead zone is nothing in javascript but is a time period to declare the variable till its initialization is known as temopral dead zone.

it is exist only the varibale declared with let and const.

Accessing the varible inside the temopral dead zone is giving us ReferenceError

### Accessing variable before it's initialization

```javascript
console.log(x); // Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10
```

### TDZ ib let and var

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

callback is a function in javascript passed an argument to another function.

it allow code to excute after some oeprtation.

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

1. async is a keyword in javascript which is used before the function to make this fuunction is async function.
2. it always return the promise whether its return explictly or not.

```javascript
async function fetchData() {
  return "fetching the data...";
}
console.log(fetchData());
// output : Promise { 'fetching the data...' }
```

## await

1. await is keyword that is only used inside the async function.
2. it pause the excution utill the promise resolved.
3. it makes asynchronus code looks synchronus and more readable.

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

Hoisting in a javascript is a phenomenon that provide a facility to access the variable anf function before it initalization.

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
