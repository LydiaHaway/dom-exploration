document.body.onload = addSection;

const array = ["Sebastien", "Louis", "Marlène", "Quentin", "Lydia"];

function randomName(array) {
  return array.sort(() => Math.random() - 0.5);
}

const nameApprentice = randomName(array);

function addSection(nameApprentice) {
  for (i = 0; i < nameApprentice.length; i++) {
    let createSection = document.createElement("section");
    createSection.setAttribute("id", "mySection");
    document.body.appendChild(createSection);
    let heading = document.createElement("p");
    let txt1 = document.createTextNode(nameApprentice[i]);
    heading.appendChild(txt1);
    document.getElementById("mySection").appendChild(heading);

    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    let color = `rgb(${r}, ${g}, ${b})`;

    heading.style.backgroundColor = color;

    r < 150 && g < 150
      ? (heading.style.color = "white")
      : (heading.style.color = "black");
  }
}

addSection(nameApprentice);
