const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// push an array to another array
marvel_heros.push(dc_heros);
console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// do the concatenation
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// concatenation by using spread operator
const allNew_heros = [...marvel_heros, ...dc_heros];
console.log(allNew_heros); //  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const array = [1, 2, 3, [8, 6, 7, 2], 5, 8, [4, 3, 8, 9, [10, 14, 18, 20]]];
console.log(array.flat(Infinity));
/*[
   1,  2,  3, 8, 6, 7,  2,
   5,  8,  4, 3, 8, 9, 10,
  14, 18, 20
]*/

// Array.form() => if we pass anything inside the form method it will convert in aarray anf log it to the console
console.log(Array.from("ABHISHEK")); // ['A', 'B', 'H', 'I', 'S', 'H', 'E', 'K']

// Array.of method

let score1 = 100;
let score2 = 200;
let score3 = 300;

let arrayOf = Array.of(score1, score2, score3);
console.log(arrayOf); // [100, 200, 300];
