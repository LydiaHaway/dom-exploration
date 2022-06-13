let list = document.querySelector("ul");

let faf = document.querySelector("ul :nth-child(6)");
let first = list.firstChild;

let movies = list.childNodes;

movies.forEach((movie) => {
  if (movie.nodeType === 1) {
    list.removeChild(faf);
    list.insertBefore(faf, first);
  }
});

movies.forEach((movie) => {
  if (movie.nodeType === 1) {
    console.log(movie.lastChild);
    movie.addEventListener("click", () => {
      if (movie.lastChild.nodeValue === "Fast and Furious") {
        alert(
          "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
        );
      } else {
        alert(movie.lastChild.nodeValue);
      }
    });
  }
});
