// array

let arr = [0, 1, 2, 3, 4, 5, 6, "abhi", true, undefined, [7, 8, 9]];
console.log(arr); // [ 0, 1, 2, 3, 4, 5, 6, 'abhi', true, undefined, [ 7, 8, 9 ] ]

let arr1 = new Array(1, 5, 6, 7, 9, 3);
console.log(arr1); // [ 1, 5, 6, 7, 9, 3 ]

// Arrays method
arr1.push(10);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.unshift(14);
console.log(arr1);

console.log(arr1[2]);

const newArray = arr1.join();
console.log(newArray);

console.log(arr.includes(5));
console.log(arr.indexOf(5));

// slice() and splice()
// [1, 5, 6, 7, 9, 3]
console.log(arr1.slice(1, 3)); // [ 5, 6 ]
console.log(arr1);

console.log(arr1.splice(1, 3)); //  [ 5, 6, 7 ]
console.log(arr1); // original aray changed [ 1, 9, 3 ]
