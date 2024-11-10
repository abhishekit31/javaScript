const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

// div.setAttribute("title", "generated title");
// div.innerText = "creating attribute";
// div.style.backgroundColor = "green";
// div.style.color = "white";

document.body.appendChild(div);
const h1 = document.createElement("h1");
h1.innerText = "This is my heading tag";
h1.style.color = "orange";

div.appendChild(h1);
