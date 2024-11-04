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
 * In javascript before start excuting the code by javscript engine it crate a memory is allocated isnide it stored some special keywprd known as undefined
 */
getName();     // Abhishek
console.log(a);  // undefined
console.log(getName) // return the whole getNmae function.

var a = 7;

function getName(){
    console.log("Abhishek")
}

/**
 *  If we are declaring the function as a arrow funtion and try to access it before it initialize it it will throw the error "getName is not a function"
 *  becouse now arrow funtion is treated as a variable not a function.
 */

// getName();     // Uncaught TypeError: getName is not a function
// console.log(a);  // undefined

// var a = 7;

// var getName = () =>{
//     console.log("Abhishek")
// }
// getName(); //Abhishek


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
