// for of loop :- this is a array specific loop

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  console.log(element);
}

//String array

let stringArray = ["Abhishek", "Vishal", "Vishu", "Goldu"];

for (const value of stringArray) {
  console.log(value);
}

// String

const strings = "ABHISHEK";
for (const str of strings) {
  console.log(`each char :  ${str}`);
}

// -----Maps-----
// map is the object that holds the key value pair
// inisertion order is presrved
// Duplicate not allowed

const map = new Map();

map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India"); // duplicate not allowed

console.log(map);
for (const [key, value] of map) {
  console.log(`${key} : ${value}`); // print the key value pair
}
