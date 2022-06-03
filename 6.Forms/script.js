const inputName = document.querySelector("#firstname");

//console.log(inputName);

const spanName = document.querySelector("#display-firstname");

//console.log(spanName);

inputName.addEventListener("keyup", () => {
  let i = inputName.value;
  spanName.innerHTML = i;
});

//____________________________________________

const inputAge = document.querySelector("#age");

//console.log(inputAge);

inputAge.addEventListener("keyup", () => {
  let j = inputAge.value;

  if (j >= 18) {
    let hardTruth = document.querySelector("#a-hard-truth");
    hardTruth.style.visibility = "visible";
  }
});

//____________________________________________

const inputPassword = document.querySelector("#pwd");
const inputPasswordConfirm = document.querySelector("#pwd-confirm");

inputPassword.addEventListener("keyup", () => {
  let k = inputPassword.value;
  if (7 > k.length) {
    inputPassword.style.backgroundColor = "red";
  } else {
    inputPassword.style.backgroundColor = "white";
  }
});

inputPasswordConfirm.addEventListener("keyup", () => {
  let l = inputPasswordConfirm.value;
  let m = inputPassword.value;
  if (l != m) {
    inputPasswordConfirm.style.backgroundColor = "red";
  } else {
    inputPasswordConfirm.style.backgroundColor = "white";
  }
});

//______________________________________________

const DarkMode = document.querySelector("#toggle-darkmode");

DarkMode.addEventListener("change", () => {
  let k = DarkMode.value;
  if (k == "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
