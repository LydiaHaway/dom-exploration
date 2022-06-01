let important = document.querySelectorAll(".important"); // querySelectorALl -- to select every element not just the first one

important.forEach(function () {
  important.title = "This is an important item";
}); // ForEach with the querySelectorAll! --- change the title for all element with the class important

console.log(important.title);

let images = document.querySelectorAll("img");

images.forEach(function (i) {
  if (i.classList != "important") {
    i.style.display = "none"; // we only change the element without the class important
  }
});

let paragraph = document.querySelectorAll("p");

paragraph.forEach(function (p) {
  const RandomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (p.classList != "important") {
    p.style.color = "#" + RandomColor;
  }
});
