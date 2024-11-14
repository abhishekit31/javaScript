class User {
  constructor(username) {
    this.username = username;
  }
  logedMe() {
    console.log(`${this.username} loged in sucessfuly`);
  }
  static createID() {
    return `123`;
  }
}
const abhi = new User("vishu");
console.log(abhi.createID());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const taecher = new Teacher("abhi", "abhi@123.com");
taecher.logedMe();
console.log(taecher.createID());
