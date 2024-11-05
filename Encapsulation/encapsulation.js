/**
 * Encapsulation is used in javascript for data hiding concept, here n below code the count variable is hidden.
 * we cant access without function.
 */

function counter() {
  var count = 0;

  return function increament() {
    count++;
    console.log(count);
  };
}
var count1 = counter();
count1(); // 1
count1(); // 2

// it is again create a fresh new counter there is no touch with counter1.
var count2 = counter();
count2(); // 1
count2(); // 2
