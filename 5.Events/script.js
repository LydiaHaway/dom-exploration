const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

//___________________________ Generate new square of the right color

const greenSquare = document.querySelector(".green");
const violetSquare = document.querySelector(".violet");
const orangeSquare = document.querySelector(".orange");

const containerDisplay = document.querySelector(".displayedquare-wrapper");

containerDisplay.classList.remove("displayedquare-wrapper");
containerDisplay.classList.add("displayedsquare-wrapper");

function createSquareGreen() {
  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare", "green");
  containerDisplay.appendChild(newSquare);
}

greenSquare.addEventListener("click", createSquareGreen);

function createSquareViolet() {
  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare", "violet");
  containerDisplay.appendChild(newSquare);
}

violetSquare.addEventListener("click", createSquareViolet);

function createSquareOrange() {
  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare", "orange");
  containerDisplay.appendChild(newSquare);
}

orangeSquare.addEventListener("click", createSquareOrange);

//__________________________ Generate the li for each click

const listDisplay = document.querySelector("ul");

function createListActionGreen() {
  const actionList = document.createElement("li");
  actionList.textContent = getElapsedTime() + " create a new green square";
  listDisplay.appendChild(actionList);
}

greenSquare.addEventListener("click", createListActionGreen);

function createListActionViolet() {
  const actionList = document.createElement("li");
  actionList.textContent = getElapsedTime() + " create a new violet square";
  listDisplay.appendChild(actionList);
}

violetSquare.addEventListener("click", createListActionViolet);

function createListActionOrange() {
  const actionList = document.createElement("li");
  actionList.textContent = getElapsedTime() + " create a new orange square";
  listDisplay.appendChild(actionList);
}

orangeSquare.addEventListener("click", createListActionOrange);

//________________________________

const RandomColor = Math.floor(Math.random() * 16777215).toString(16);

document.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    document.body.style.background = "#" + RandomColor;
    const actionList = document.createElement("li");
    actionList.textContent = getElapsedTime() + " You press the spacebar";
    listDisplay.appendChild(actionList);
  } else if (e.key === "i") {
    listDisplay.remove("li");
  } else if (e.key === "s") {
    containerDisplay.remove("div");
  }
});
