//========PROTOTYPE=========
let myHero = ["thor", "spiderMan"];

let heroPower = {
  thor: "hammer",
  spider: "sling",

  spiderPower: function () {
    console.log(`spider power is ${this.spider}`);
  },
};

Object.prototype.abhishek = function () {
  console.log(`abhishek is present in all object`);
};

myHero.abhishek(); // abhishek is present in all object

//=========Inhetitance=========

const User = {
  name: "Goldu",
  email: "goldu@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignement",
  fullTime: true,

  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//========Modern Sytax=========
Object.setPrototypeOf(TeachingSupport, Teacher);

//=========another example========
let myName = "Abhishek      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`the true length is : ${this.trim().length}`);
};
myName.trueLength();
"Goldu".trueLength();
