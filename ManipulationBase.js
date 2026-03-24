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
