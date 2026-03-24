// const next1 = document.getElementById("next1");
// const next2 = document.getElementById("next2");
// const next3 = document.getElementById("next3");
// const step1 = document.getElementById("step1");
// const step2 = document.getElementById("step2");
// const step3 = document.getElementById("step3");
// const prev2 = document.getElementById("prev2");
// const prev3 = document.getElementById("prev3");

// next1.addEventListener("click", () => {
//   step1.style.display = "none";
//   step2.style.display = "block";
// });
// next2.addEventListener("click", () => {
//   step1.style.display = "none";
//   step2.style.display = "none";
//   step3.style.display = "block";
// });
// prev2.addEventListener("click", () => {
//   step1.style.display = "block";
//   step2.style.display = "none";
// });
// prev3.addEventListener("click", () => {
//   step1.style.display = "none";
//   step2.style.display = "block";
//   step3.style.display = "none";
// });
//challenge of generate mot de pass
const generate = document.getElementById("generate");
const passwordfield = document.getElementById("password");

generate.addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value) || 8;
  const upper = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  passwordfield.value = password;
});
