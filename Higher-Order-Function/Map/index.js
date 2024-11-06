/**
 * Map is function is used to transform the data.
 */
const arr = [5, 1, 3, 2, 6];

// double the value [10, 2, 6, 4, 12]

const double = arr.map((x) => x * 2);
console.log(double);

// tripple the value [15, 3, 9, 6, 18]
const tripple = arr.map((a) => a * 3);
console.log(tripple);

// binary ['101', '1', '11', '10', '110']
const binary = arr.map((x) => x.toString(2));
console.log(binary);

const user = [
  { firstName: "Abhishek", lastName: "kumar", age: 27 },
  { firstName: "Vishu", lastName: "sigh", age: 28 },
  { firstName: "Goldu", lastName: "singh", age: 20 },
  { firstName: "ramR", lastName: "ram", age: 27 },
];

// print the fullName.
const fullName = user.map((u) => u.firstName + " " + u.lastName);
console.log(fullName);
