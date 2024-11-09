// forEach loop take a callback function it will automatically iterate the each and every element present inside the array

const coding = ["js", "ruby", "python", "react"];

//Arrow function
coding.forEach((item) => {
  console.log(item);
});

// another way to pass the function
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

// it will print the item along with index and whole array
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
