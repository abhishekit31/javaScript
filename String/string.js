let firstName = "Abhishek";
let lastName = "kumar";

//crate the string by using new keyword
const getName = new String("Vishal");
console.log(getName); // [String: 'Vishal']
/*
String {'Vishal'}
0:"V"
1:"i"
2:"s"
3:"h"
4:"a"
5:"l"

length: 6
*/

console.log(getName[3]); // log the value at index [3]
console.log(getName.indexOf("s")); // log the index of value "s"

// concatenation of two string
console.log(`Hello ${firstName} ${lastName} Wlcome!`);
console.log(firstName.length);

// changees the firstName
let changedName = firstName;
changedName = "Vishal";
console.log(`chnaged first name is : ${changedName}`);

// slice method
console.log(firstName.slice(1, 4)); // bhi

// trim method => remove the white space
let name = "  Goldu   ";
console.log(name.trim()); // Goldu
console.log(name.trim().toUpperCase()); // GOLDU
