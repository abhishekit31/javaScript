/**
 * Reduce function is used to in javascript where it takes all the element of an array and return the single valure in it.
 * reduce function takes two parameter accumulator(acc) and current(curr).
 *
 * acc :- acc is accomulate the value
 * curr :- curr is hold the current value.
 */
const arr = [5, 1, 3, 2, 6];

// find the sum of total number of element of an array

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// find the sum of total number of element of an array by suing reduce function

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

// find the max of of an array

const maxElement = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(maxElement);
