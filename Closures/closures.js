function x() {
  var a = 10;
  function y() {
    console.log(a); // 10
  }
  y();
}
x();

/**
 * A closures is nothing but it is a funvtion bind together in lexical environment is known as closures(function along with the lexical scope forms a closures is known as)
 * This is what closures is in the above example at line numner 4: it log value 10 into the console
 * We can say the function y() is lexically seated inside the function x().
 * Here the function x()is lexical parent of function y()
 */

function x() {
  var a = 10;
  function y() {
    console.log(a); //10
  }
  return y;
}
var z = x();
console.log(z); // retun the whole function
z();

/**
 * here at after line number 24 function x() is not any more in call stack but the lexical scope is still exist so here it will print 10 at line:20
 */

//=========REAL WORLD EXAMPLE========

// document.getElementById("orange").onclick = () => {
//   document.body.style.backgroundColor = `orange`;
// };
// document.getElementById("green").onclick = () => {
//   document.body.style.backgroundColor = `green`;
// };

function clickHandler(color) {
  // document.body.style.backgroundColor = color;
  return function () {
    document.body.style.backgroundColor = color;
  };
}
document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
