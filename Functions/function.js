// The way of creating a function is kmown as function statement.

// a(); // a is called
// b(); //  TypeError: b is not a function

// Function Statement

function a() {
  console.log("a called");
}
a();

// Function Expression

var b = function () {
  console.log("b called");
};
b();

/**
 * the major difference between function statment and function expression is hoisting.
 *
 * for the function statement we access before creating a function whereas in case of function statemnet we can't access before it created.
 */

//----Function declaration----(also known as function statement)
function a() {
  console.log("a called");
}

//----Anonymous Function----

/**
 * A function without name is known as anonymous function.
 * it does not have their own identity.
 * it is used in a place where the functions is used as a value
 *
 * at the time of creation it will throw an syntax error because as per ES6 the function must have function name.
 */

// function (){

// }

// ----Named function expression----

// named fucntion expression is same as a function expression but istead of creating anonymous function we need to pass the function name.

var exp = function xyz() {
  console.log("exp is called");
};
//xyz(); // ReferenceError: xyz is not defined(xyz is not created in a global scope but it is created in local scope like a variable)
exp(); // exp is called

//----difference between Arguments and parameter----
function sum(num1, num2) {
  return num1 + num2;
}
const res = sum(1, 4);
console.log(res);

// in the above code the num1 and num2 is called a parameter and the value(1,4) pass to line 59 is arguments
