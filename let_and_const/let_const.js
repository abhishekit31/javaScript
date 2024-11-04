console.log(a); // undefined
console.log(b); // can't access before it's initialization
var a = 10;
let b = 20;

/**
 * if we deaclred a variable with var we can access before it initilized whereas in case of let we can't access before initialization.
 * because in the let and const case it will allocate a memory diffrently that's why we can't access before it's initalization.
 * 
 * in case of var we can redeclare the variable whereas in case let it's little stricky (we can not redclare ).
 * 
 * --------Temporal Dead zone----------- 
 * temporal dead zone is a time since when let variable is hoisted and till it is initalized saome value the time    between that is known as temporal dead zone .
 * 
 * we can't access then since it is in temporal dea zone till assign some values in it 
 */

// console.log(a);
// let c = 10;
// var d = 100;


/**
 * in case of let we declared a varibal we can initaized latter in the code whereas in the case of const we can't initialize the value letter in the code. 
 */


// let a;
// a = 20;
// const y;
// b = 200;
