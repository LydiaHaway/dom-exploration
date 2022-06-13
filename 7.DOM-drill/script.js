let list = document.querySelector("ul");

let faf = document.querySelector("ul :nth-child(6)");
faf.classList.add("important");
let first = list.firstChild;

let movies = list.childNodes;

movies.forEach((movie) => {
  if (movie.nodeType === 1) {
    list.removeChild(faf);
    list.insertBefore(faf, first);
  }
});

//________________________________________________________________________

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

//________________________________________________________________________

let div = document.createElement("div");
document.body.insertBefore(div, list);

let select = document.createElement("select");
div.appendChild(select);

let optionAll = document.createElement("option");
select.appendChild(optionAll);
let textAll = document.createTextNode("All franchises");
optionAll.appendChild(textAll);

let optionImportant = document.createElement("option");
select.appendChild(optionImportant);
let text1 = document.createTextNode("Important franchises");
optionImportant.appendChild(text1);

let optionNormale = document.createElement("option");
select.appendChild(optionNormale);
let text2 = document.createTextNode("Normal franchises");
optionNormale.appendChild(text2);

const option = document.querySelector("select");

option.addEventListener("change", () => {
  let i = option.value;
  if (i == "All franchises") {
    movies.forEach((movie) => {
      if (movie.nodeType === 1) {
        movie.style.visibility = "visible";
      }
    });
  }
  if (i == "Important franchises") {
    movies.forEach((movie) => {
      if (movie.nodeType === 1) {
        if (movie.classList != "important") {
          movie.style.visibility = "hidden";
        } else {
          movie.style.visibility = "visible";
        }
      }
    });
  }
  if (i == "Normal franchises") {
    movies.forEach((movie) => {
      if (movie.nodeType === 1) {
        if (movie.classList != "") {
          movie.style.visibility = "hidden";
        } else {
          movie.style.visibility = "visible";
        }
      }
    });
  }
});

//_______________________________________________________________

document.addEventListener("keypress", (e) => {
  if (e.key === "r") {
    movies.forEach((movie) => {
      if (movie.nodeType === 1) {
        if (movie.classList != "important") {
          for (let i = list.children.length; i >= 0; i--) {
            list.appendChild(list.children[(Math.random() * i) | 1]);
          }
        }
      }
    });
  }

  if (e.key === "p") {
    movies.forEach((movie) => {
      if (movie.nodeType === 1) {
        if (movie.classList == "important") {
          const clone = movie.cloneNode(true);
          clone.classList.remove("important");
          list.insertBefore(clone, first);
        }
      }
    });
  }
});
