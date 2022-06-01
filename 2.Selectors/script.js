let important = document.querySelectorAll(".important");

important.forEach(function () {
  important.title = "This is an important item";
}); // ForEach with the querySelectorAll!

console.log(important.title);

let images = document.querySelectorAll("img");

images.forEach(function (i) {
  if (i.classList != "important") {
    i.style.display = "none";
  }
});

let paragraph = document.querySelectorAll("p");

paragraph.forEach(function (p) {
  const RandomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (p.classList != "important") {
    p.style.color = "#" + RandomColor;
  }
});
