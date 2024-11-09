/* call method is nothing in javascript by using call method we can do the function borrowing.
 call method is used to invoke the function it will take the argument as ist.
*/

let student = {
  fisrstName: "Abhishek",
  lastName: "Singh",

  printName: function () {
    console.log(`The student name is : ${this.fisrstName} ${this.lastName}`);
  },
};
student.printName(); // The student name is Abhishek Singh

let student2 = {
  fisrstName: "Goldu",
  lastName: "Singh",
};

student.printName.call(student2); // The student name is Goldu Singh
