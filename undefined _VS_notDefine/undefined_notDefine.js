console.log(num); // undefined
var num = 10;
console.log(num) // 10

/**
 * undefined is a special keyword in javaScript anf it is like a placeholder.
 * 
 * in the javaScript whenever the programhas start executing the javascript engine is creeted a global execution context.
 * 
 * at line no. 1st it will log undefined to the console because in javascript "num" is initialized as undefined and kater in it will changed to the original value.
 */


console.log(x); // Uncaught ReferenceError: x is not defined

/**
 * he at line no. 14 it will thorw an ReferenceError that is x is not define because we trying to access the x that is no were in the moemory allocation.
 */