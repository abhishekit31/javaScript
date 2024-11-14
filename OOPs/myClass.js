class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
  encryptPass() {
    return `${this.password}abc`;
  }
}

const user1 = new User("vishal", "vishal@gmail.com", "123");
console.log(user1); // User { username: 'vishal', email: 'vishal@gmail.com', password: '123' }
console.log(user1.changeUsername()); // VISHAL
console.log(user1.encryptPass()); // 123abc

//=========behind the scene========
function Users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
Users.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
Users.prototype.encryptPass = function () {
  return `${this.password}abc`;
};
const user2 = new User("goldu", "goldu@gmail.com", "123");
console.log(user2); // User { username: 'goldu', email: 'goldu@gmail.com', password: '123' }
console.log(user2.changeUsername()); // GOLDU
console.log(user2.encryptPass()); // 123abc
