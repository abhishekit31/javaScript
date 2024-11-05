/**
 *  what is block In javaScript ?
 *  block is define as {} => this is a block.
 *  it is also known as compound
 *  block is the combination of multiple javascript into a group and used it where javscript want single statement.
 *  ir uses in a place where javscript accept one statement.
 *
 */

if (true) {
  const a = 20;
  console.log(a);
}

/**-----Block Scope-----
 *  the all variable and funtion we can access inside the block s known as block scope.
 */

{
  var x = 10;
  let y = 20;
  const z = 30;
}
console.log(x); // 10
console.log(y); // 'y is not define'
console.log(z); // 'z is not define'

/**
 * var is allocate a memory in global scope whereas the let and const is allocate a memory in some seprate block so thar the let and const is a bloek keyword.
 * var is accessinble to anywhere in the code becasuse it allocate a memory insde the global where in case of let and const it allocate a sepreate memory that is block.
 */

var x = 100;
let y = 200;
{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x); // 10
  console.log(y); // 20
}
console.log(x); // 10
console.log(y); //200  here the shadowing value iof b over here

const p = 10;
function x() {
  const p = 400;
  console.log(p); // 400
}
x();
console.log(p); // 10
/**
 * here the shadowing come into the picture if we have same var in bothr globala and block level then the block leven var is shadow of global var.
 */
