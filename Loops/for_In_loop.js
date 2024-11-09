// for in loop

// for in loop : - it is worked over object as well

const languases = {
  js: "javaScript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in languases) {
  console.log(`${key} : ${languases[key]}`);
}

// by using array

const prog = ["js", "py", "rb"];
for (const key in prog) {
  console.log(prog[key]);
}
