let date = new Date();
console.log(date); //  2024-11-08T06:09:31.314Z
console.log(date.toString()); // Fri Nov 08 2024 11:39:31 GMT+0530 (India Standard Time)
console.log(date.toDateString()); //  Fri Nov 08 2024

console.log(date.getTime());
console.log(date.getDate());
console.log(date.getMonth + 1);

const newDate = new Date(1995, 9, 5);
console.log(newDate.toDateString()); //  Thu Oct 05 1995

const dateTime = new Date(2024, 9, 5, 10, 0);
console.log(dateTime.toLocaleString()); // 10/5/2024, 10:00:00 AM

const dateFormat = new Date("10-02-2023");
console.log(dateFormat.toLocaleString()); // 10/2/2023, 12:00:00 AM

let timeStamp = Date.now();
console.log(timeStamp); // 1731046171484 in milisecond
