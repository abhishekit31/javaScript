const div = document.createElement("div");
div.id = "canvas";

document.body.appendChild(div);

const h1 = document.createElement("h1");
h1.innerText = "Color Scheme Switcher 🎨";
div.appendChild(h1);

//=========Span1=========
const span1 = document.createElement("span");
span1.className = "button";
span1.id = "grey";
div.appendChild(span1);

//=========Span2=========
const span2 = document.createElement("span");
span2.className = "button";
span2.id = "pink";
div.appendChild(span2);

//=========Span3=========
const span3 = document.createElement("span");
span3.className = "button";
span3.id = "blue";
div.appendChild(span3);

//=========Span4=========
const span4 = document.createElement("span");
span4.className = "button";
span4.id = "yellow";
div.appendChild(span4);

const h2 = document.createElement("h2");
h2.innerText = "Try clicking on one of the above color";
div.appendChild(h2);

const h2Span = document.createElement("span");
h2Span.textContent = " to change the background color of this page";
h2.appendChild(h2Span);

//========= Put The Logic and addEventListener =========
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
