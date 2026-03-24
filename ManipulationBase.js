const button = document.getElementById("clickButton");
const color = ["red", "yellow", "black", "green", "white"];
button.addEventListener("click", () => {
  //   const randomIndex = Math.floor(Math.random() * color.length);
  //   document.body.style.backgroundColor = color[randomIndex];
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const count = document.getElementById("count");
const reset = document.getElementById("reset");
let counter = 0;
inc.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;
});
dec.addEventListener("click", () => {
  counter--;
  count.innerHTML = counter;
});
reset.addEventListener("click", () => {
  count.innerHTML = 0;
});
//challenge 3
const input = document.querySelector("input");
const displayText = document.querySelector(".displayText");
input.addEventListener("input", () => {
  displayText.textContent = input.value;
});
//challenge 4
const card = document.querySelector(".card");
const buttont = document.querySelector(".toggle");
buttont.addEventListener("click", () => {
  card.classList.toggle("dark");
});
// challenge 5
const quotes = [
  "Le succès est la somme de petits efforts répétés.",
  "N'abandonne jamais.",
  "La pratique rend parfait.",
  "Le code est comme l'humour.",
];

const text = document.querySelector("#quote");
const generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[random];
});
