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

//----another example of reduce function----

const user = [
  { firstName: "Abhishek", lastName: "kumar", age: 27 },
  { firstName: "Vishu", lastName: "sigh", age: 28 },
  { firstName: "Goldu", lastName: "singh", age: 20 },
  { firstName: "ramR", lastName: "ram", age: 27 },
];

// {20: 1, 27: 2, 28: 1}

const ageCount = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(ageCount);

// Another Example of reduce function

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
