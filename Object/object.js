const obj = new Object();
obj.value = 8;
obj.type = "Integer";

console.log(obj);

let school = {
  name: "St. Paul's Senior Secondary School",
  year: 1971,
  location: "Sasaram",

  diplayInfo: function () {
    console.log(
      `${school.name} was established in ${school.year} at ${school.location}`
    );
  },
};
school.diplayInfo();

// Inherited Property

const obj1 = new Object();
obj1.property1 = 5;
// To verify if a property is an object’s Own property, we can use the hasOwnProperty method
console.log(obj1.hasOwnProperty("property1")); // true

let obj2 = {
  name: "OMM",
  class: "CD",
  Branch: "CSE",
};
// Checking for Name key
console.log(obj2.hasOwnProperty("name")); // true
console.log(obj2.hasOwnProperty("rollNumber")); // false

obj2.rollNumber = 2129700;
console.log(obj2.hasOwnProperty("rollNumber")); // true

// Accessing object member
console.log(obj2.rollNumber); // OMM
// Bracket access
console.log(obj2["name"]); // OMM

// Deleting a key
delete obj2.name;
console.log(obj2["name"]); // Undefined

// merge all the aray by using spread operator(...obj1)
let obj1 = {
  1: "a",
  2: "b",
};

let obj2 = {
  3: "a",
  4: "b",
};

let obj3 = {
  5: "a",
  6: "b",
};

const newObj = { ...obj1, ...obj2, ...obj3 };
console.log(newObj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(Object.keys(obj1)); // [ '1', '2' ]
console.log(Object.values(obj1)); // [ 'a', 'b' ]

// object destructuring
const course = {
  courseName: "javaScript",
  fee: "999",
  instructor: "Akshay Saini",
};

const { courseName } = course;
console.log(courseName); // javaScript

const { courseName: csName } = course;
console.log(csName); // javaScript
