class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }
  addCourse() {
    console.log(`A course wad added by ${this.username}`);
  }
}

const abhi = new Teacher("abhi", "abhi@gmail.com", 1234);
abhi.addCourse();

const user = new User("visihu");
user.logMe();
