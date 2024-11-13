function multiplyBy5(num) {
  return num * 5;
}
console.log(multiplyBy5(9));
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increament = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is : ${this.score}`);
};
const user1 = new createUser("vishu", 10);
const user2 = new createUser("goldu", 12);

user1.increament();
user1.printMe();
