let range = document.querySelector("#measure");
let passwordOne = document.querySelector(".password-one");
let passwordTwo = document.querySelector(".password-two");
let passwordOneEl = "";
let passwordTwoEl = "";

function generate() {
  let characters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordOneEl = "";
  passwordTwoEl = "";

  for (let i = 0; i < range.value; i++) {
    let randompass1 = Math.floor(Math.random() * characters.length);
    let randompass2 = Math.floor(Math.random() * characters.length);
    passwordOneEl += characters.substring(randompass1, randompass1 + 1);
    passwordTwoEl += characters.substring(randompass2, randompass2 + 1);
  }
  passwordOne.textContent = passwordOneEl;
  passwordTwo.textContent = passwordTwoEl;
}

function copyPasswordOne() {
  let copyTextOne = document.querySelector(".password-one").textContent;
  navigator.clipboard.writeText(copyTextOne);
  alert("Copied to clipboard");
}

function copyPasswordTwo() {
  let copyTextTwo = document.querySelector(".password-two").textContent;
  navigator.clipboard.writeText(copyTextTwo);
  alert("Copied to clipboard");
}
