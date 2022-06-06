const main = document.querySelector("main");

let createResult = document.createElement("h3");
createResult.setAttribute("id", "result");
main.appendChild(createResult);

//__________________________________________

const array = [
  "(",
  ")",
  "%",
  "C",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "-",
  0,
  ".",
  " ",
  "+",
];

const arrayText = [
  "(",
  ")",
  "%",
  "C",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "-",
  0,
  ".",
  "=",
  "+",
];

//___________________________________________

for (i = 0; i < array.length; i++) {
  let createButton = document.createElement("button");
  createButton.setAttribute("class", "calculatorButton");
  createButton.setAttribute("id", array[i]);
  main.appendChild(createButton);
  let button = document.createTextNode(arrayText[i]);
  createButton.appendChild(button);
}

//___________________________________________

let buttons = document.querySelectorAll(".calculatorButton");
let result = document.getElementById("result");

let clear = document.getElementById("C");
clear.setAttribute("class", "clear");

let equal = document.getElementById(" ");
equal.setAttribute("class", "equal");

//__________________________________________

buttons.forEach((button) => {
  if (buttons.id != "equal") {
    button.addEventListener("click", (e) => {
      result.textContent += e.target.id;
    });
  }
});

clear.addEventListener("click", () => {
  result.textContent = "";
});

function computeResult(str) {
  return Function("return " + str)();
}

equal.addEventListener("click", () => {
  result.textContent = computeResult(result.textContent);
});
