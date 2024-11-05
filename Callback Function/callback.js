/**
 * ----callback function----
 * the function pass into the another function is known as a callback function.
 */
function msgDisplay() {
  setTimeout(() => {
    console.log("Hello Learner");
  }, 3000);
}
msgDisplay();

function x(y) {
  console.log("x is called");
  y();
}
x(function y() {
  console.log("y is called");
});

//--------another example of callback--------
function addEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function info() {
    console.log("button clicled", ++count);
  });
}
addEventListeners();

// Garbbage collection and removeEventListners ->

// eventListners are heavy and it takes a more memory whenever the any event is attached it forms a closures but it is not freeing up after the call stack is empty. That's why we need to remove eventListners when it is not in use.
