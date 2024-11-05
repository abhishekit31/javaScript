// setTimeout can't guranteedus to call the function after 5sec it might take 6 or 8 sec .
console.log("start");
function cb() {
  console.log("callback function is called");
}
setTimeout(cb, 5000);
console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expire");
