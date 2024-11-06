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
