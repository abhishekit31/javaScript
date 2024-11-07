let num = "33abc";

console.log(typeof num);

let numIn = Number(num);
console.log(numIn); // NaN is a special type

console.log(typeof numIn);

/*
"33" => 33
"33abc" => Nan
null => 0
undefined => NaN
trues = 1
*/

let isLoggedIn = "";

let conIsLoggedIn = Boolean(isLoggedIn);
console.log(conIsLoggedIn);

/*
1 => true
0 => false
"" => false
"Abhi" => true
*/
