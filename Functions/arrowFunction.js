// this is keyword which is refer to the current value
const user = {
  userName: "Abhishek",
  price: 999,
  messageDisplay: function () {
    console.log(`${this.userName}, welcome to the website !`);
    console.log(this);
  },
};
user.messageDisplay(); // Abhishek, welcome to the website !
user.userName = "Goldu";
user.messageDisplay(); //  Goldu, welcome to the website !

// function chai() {
//   let userName = "Vishal";
//   console.log(this.userName); //undefined
// }
// chai();

const chai = () => {
  let userName = "Vishu";
  console.log(this.userName); // undefined
};
chai();
