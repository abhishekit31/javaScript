//----This is the normal function---

// var a = 7;

// function getName(){
//     console.log("Abhishek")
// }
// getName();     // Abhishek
// console.log(a);  //7

/**
 *  If we not declare any variable with name (var a = 7) it will throw an error "Uncaught ReferenceError: a is not defined"
 */

// getName();     // Abhishek
// console.log(a);  // Uncaught ReferenceError: a is not defined

// // var a = 7;

// function getName(){
//     console.log("Abhishek")
// }


//---Hoisting--- 
/**
 * Hoisting is the phenomena in javascript by which we can access this variable and fucntion even before it's initialize it.
 * 
 * we can put some value in it  and we can access it without any error
 * 
 * in javascript before it excute the code by javscript engine it crate a memory isnide it 
 */
getName();     // Abhishek
console.log(a);  // undefined

var a = 7;

function getName(){
    console.log("Abhishek")
}

/**
 * before and after initalize the funtion if we are trying to console this getName it will log the whole function to the console
 */

// console.log(getName);  // return the whole function
// console.log(a);  // undefined

// var a = 7;

// function getName(){
//     console.log("Abhishek")
// }
// console.log(getName);  // return the whole function
