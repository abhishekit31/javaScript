/**
 * Filter function is used to filter the value inside the array.
 */
const arr = [5, 1, 3, 2, 6];

// filter odd values
const output = arr.filter((x) => x % 2);
console.log(output);

// filter even values
const res = arr.filter((x) => x % 2 === 0);
console.log(res);

// ---- another example ---
// print the firstNmae of the user whose age is less than 30.
const user = [
  { firstName: "Abhishek", lastName: "kumar", age: 27 },
  { firstName: "Vishu", lastName: "sigh", age: 28 },
  { firstName: "Goldu", lastName: "singh", age: 20 },
  { firstName: "rama", lastName: "ram", age: 27 },
];

const result = user.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(result);
