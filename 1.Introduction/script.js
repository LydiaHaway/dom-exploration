console.log(document.title); // Display the title

document.title = "Modifying the DOM"; // change the title

console.log(document.title);

//document.body.style.backgroundColor = "#FF69B4"; // change the background color

const RandomColor = Math.floor(Math.random() * 16777215).toString(16); // Get a random color for the background

document.body.style.backgroundColor = "#" + RandomColor;

//const bodyChildren = document.body.children; // target all children of the body

//console.log(bodyChildren);

let body = document.body.children;

for (children of body) {
  console.log(children);
}
