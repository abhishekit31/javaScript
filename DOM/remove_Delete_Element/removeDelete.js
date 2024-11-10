const div = document.createElement("div");
div.id = "main";

const ul = document.createElement("ul");
ul.id = "unorder";

document.body.appendChild(div);
div.appendChild(ul);

console.log(div);

// =========basic way==========

function addLanguage(lang) {
  const li = document.createElement("li");
  li.innerText = lang;

  const ul = document.getElementById("unorder");
  ul.appendChild(li);
}
addLanguage("javaScript");

// =========optimzed way==========

function addOptimizeLang(lang) {
  const li = document.createElement("li");
  const linode = document.createTextNode(lang);
  li.appendChild(linode);

  const ul = document.getElementById("unorder");
  ul.appendChild(li);
}
addOptimizeLang("java");
addOptimizeLang("python");
addOptimizeLang("ruby");

// =========Edit the list==========

const editLi = document.querySelector("li:nth-child(2)");
editLi.innerHTML = "mojo";

// =========Edit the list by optimized way==========

const editLi = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "mojo";
editLi.replaceWith(newLi);

// =========remove List==========

const removeList = document.querySelector("li:last-child");
removeList.remove();
