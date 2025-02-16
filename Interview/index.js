console.log(x); // undefined
console.log(getName); // [Function: getName] return the function

var x = 10;

function getName() {
  console.log("Abhishek");
}
console.log(x); // 10
console.log(getName); // [Function: getName] return the function
