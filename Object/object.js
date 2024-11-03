const obj = new Object();
obj.value =8;
obj.type = 'Integer';

console.log(obj);

let school = {
    name : "St. Paul's Senior Secondary School",
    year : 1971,
    location : 'Sasaram',

    diplayInfo : function(){
        console.log(`${school.name} was established in ${school.year} at ${school.location}`);
    }
}
school.diplayInfo();

// Inherited Property

const obj1 = new Object();
obj1.property1 = 5;
// To verify if a property is an object’s Own property, we can use the hasOwnProperty method
console.log(obj1.hasOwnProperty('property1')); // true


let obj2 = {
    name : "OMM",
    class : 'CD',
    Branch : 'CSE',
}
// Checking for Name key
console.log(obj2.hasOwnProperty('name')); // true
console.log(obj2.hasOwnProperty('rollNumber')); // false

obj2.rollNumber = 2129700
console.log(obj2.hasOwnProperty('rollNumber')); // true

// Accessing object member 
console.log(obj2.rollNumber);  // OMM
// Bracket access
console.log(obj2['name']); // OMM

// // Deleting a key
delete obj2.name;
console.log(obj2['name']);  // Undefined 