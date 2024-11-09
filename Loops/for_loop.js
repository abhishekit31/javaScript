// for loop

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 - is the best number");
  }
  console.log(i); // log 1 - 10 number in the console
}

// print the table from 1-20

for (let i = 1; i <= 20; i++) {
  console.log(`--Table of ${i}--`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// print all the value of the array

let arr = ["Abhishek", "Vishal", "Vishu", "Goldu"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// break and continue

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log(`5 is the best number`);
    // break;
    continue;
  } else {
    console.log(i);
  }
}
