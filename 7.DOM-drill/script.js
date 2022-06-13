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
