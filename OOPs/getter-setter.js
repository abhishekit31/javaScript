class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }
  get pass() {
    return `${this._pass}abhi`;
  }
  set pass(value) {
    this._pass = value;
  }
}
const user1 = new User("Abhishek", "abhi@123.com", 1234);
console.log(user1.pass);
