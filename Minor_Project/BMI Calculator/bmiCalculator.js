// // =========MAIN SECTION=========
// const container = document.createElement("div");
// container.id = "container";

// // =========HEADING SECTION=========
// const heading = document.createElement("h1");
// heading.textContent = "BMI Calculator";
// container.appendChild(heading);

// // =========FORM SECTION=========
// const form = document.createElement("form");
// container.appendChild(form);

// // =========HEIGHT SECTION=========
// const para1 = document.createElement("p");
// form.appendChild(para1);

// const label1 = document.createElement("label");
// label1.textContent = "Height in CM : ";
// para1.appendChild(label1);

// const heightInput = document.createElement("input");
// heightInput.id = "height";
// heightInput.type = "text";
// para1.appendChild(heightInput);

// // =========WEIGHT SECTION=========
// const para2 = document.createElement("p");
// form.appendChild(para2);

// const label2 = document.createElement("label");
// label2.textContent = "Weight in KG : ";
// para2.appendChild(label2);

// const weightInput = document.createElement("input");
// weightInput.id = "weight";
// weightInput.type = "text";
// para2.appendChild(weightInput);

// // =========BUTTON SECTION=========
// const button = document.createElement("button");
// button.textContent = "Calculate";
// form.appendChild(button);

// // =========RESULT SECTION=========
// const resultDiv = document.createElement("div");
// resultDiv.id = "results";
// resultDiv.textContent = "results";
// form.appendChild(resultDiv);

// // =========WEIGHT GUIDE SECTION=========
// const weightGuideDiv = document.createElement("div");
// weightGuideDiv.id = "weight-guide";
// form.appendChild(weightGuideDiv);

// const heading3 = document.createElement("h3");
// heading3.textContent = "BMI Weight Guide";
// weightGuideDiv.appendChild(heading3);

// const para3 = document.createElement("p");
// para3.textContent = "Under Weight = Less than 18.6";
// weightGuideDiv.appendChild(para3);

// const para4 = document.createElement("p");
// para4.textContent = "Normal Range = 18.6 and 24.9";
// weightGuideDiv.appendChild(para4);

// const para5 = document.createElement("p");
// para5.textContent = "Overweight = Greater than 24.9";
// weightGuideDiv.appendChild(para5);

// // =========BODY APPEND SECTION=========
// document.body.appendChild(container);

// =========ANOTHER WAY TO OPTIMIZE THE CODE=========

// Main Container
const container = document.createElement("div");
container.id = "container";

// Heading
container.innerHTML = `<h1>BMI Calculator</h1>`;

// Form Section
const form = document.createElement("form");
form.innerHTML = `
  <p>
    <label>Height in CM: <input id="height" type="text"></label>
  </p>
  <p>
    <label>Weight in KG: <input id="weight" type="text"></label>
  </p>
  <button>Calculate</button>
  <div id="results">results</div>
  <div id="weight-guide">
    <h3>BMI Weight Guide</h3>
    <p>Under Weight = Less than 18.6</p>
    <p>Normal Range = 18.6 and 24.9</p>
    <p>Overweight = Greater than 24.9</p>
  </div>
`;
container.appendChild(form);
document.body.appendChild(container);

// =========INRACTIVITY SECTION=========
const form1 = document.querySelector("form");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
