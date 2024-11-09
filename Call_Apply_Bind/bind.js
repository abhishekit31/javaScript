/* bind method retuns the function but it does not invoke immediately.
   the function which is return by bind method we can invoke it by name 
*/

let student = {
  firstName: "Abhishek",
  lastName: "Singh",

  printName: function () {
    console.log(`The student name is : ${this.firstName} ${this.lastName}`);
  },
};
student.printName(); // The student name is Abhishek Singh

let student2 = {
  firstName: "Goldu",
  lastName: "Singh",
};

let copyOfStudent = student.printName.bind(student2);
console.log(copyOfStudent); // [Function: bound printName]

copyOfStudent(); // The student name is : Goldu Singh
