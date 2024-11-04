/**
 * shortest javaScript program is known as the program that is empty
 * empty file -> shortest program
 * 
 * even the file is empty there is nothing to do still the javScript engine is lots of thing to do behind the seens.
 *
 * javaScript is always created windows -> this is global object created by the javaScript engine along with the global execution context.
 * 
 * JavaScript also created this keyword.
 * 
 * 
 */

var num = 10; // golobal variablepr global scope
console.log(window.num); //10
console.log(num); // 10
console.log(this.num) // 10 if we are using this.num it will also point to the same refrence


function local_Scope(){
    var num1 = 20; // local scope
}

/**
 * what is global scope ?
 * any thing is created outside the function or globally is called as global scope and it attached to the global object that name is "window".
 * and acces it by snig window ex :- console.log(window.a); and 
 * console.log(a); -> if we don't put anything infront of "a" it will automaically assume that yoy are referring to the global object(window).
 * 
 * what is local scope ? 
 * Any variable of function is created inside the function is called as local scope and  
 */

