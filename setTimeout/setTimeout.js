function x() {
  var a = 10;
  setTimeout(function () {
    console.log(a);
  }, 3000);
  console.log("Namaste Javascript");
}
x();

/**
 * setTimeout is attached the call back function and set the timer or after expire the timer is will call the function.
 */

function y() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Namaste Javascript");
}
y();
