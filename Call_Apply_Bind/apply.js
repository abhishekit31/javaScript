// apply methd is used to invoke the function and in the bind method we pass the argument as array.

let employee = {
  firstName: "Abhishek",
  lastName: "Singh",
  fullname: function (designation, cmpName) {
    console.log(
      `${this.firstName} ${this.lastName} is working as a ${designation} in ${cmpName} company`
    );
  },
};

let emp2 = {
  firstName: "Goldu",
  lastName: "Singh",
};

employee.fullname.apply(emp2, ["Engineer", "Tech Corp"]); // Goldu Singh is working as a undefined in undefined company
