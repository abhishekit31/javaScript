const divMain = document.createElement("div");
divMain.className = "main";
document.body.appendChild(divMain);

const divSpan = document.createElement("div");
divSpan.id = "banner";
divMain.appendChild(divSpan);

const span = document.createElement("span");
span.textContent = "Your local time";
divSpan.appendChild(span);

const divClock = document.createElement("div");
divClock.id = "clock";
divMain.appendChild(divClock);

console.log(divMain);

//========Logic Start Here=========
const clock = document.getElementById("clock");
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
