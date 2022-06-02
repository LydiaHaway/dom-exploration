const ol = document.querySelector("ol");

const a = ol.firstElementChild;
const b = ol.lastElementChild;

console.log(a);
console.log(b);

ol.removeChild(b);
ol.insertBefore(b, a);

let main = document.querySelector("main");

let section = document.querySelector("section");

let ThirdSection = section.nextElementSibling;

let titleThirdSection = ThirdSection.firstElementChild;

let divSecondSection = ThirdSection.nextElementSibling;

let SecondSection = divSecondSection.firstElementChild;

console.log(SecondSection);

let titleSecondSection = SecondSection.firstElementChild;

SecondSection.appendChild(ThirdSection);

SecondSection.removeChild(ThirdSection);
