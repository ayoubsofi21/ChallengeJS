let user = {
  nom: "ayoub",
  age: 12,
  passions: ["football", "gymnastique", "tennis"],
};
user.id = 1;
// delete user.age;
user.passions[1] = "Regbi";
function display() {
  console.log(
    `hello ${user.nom} , i am ${user.nom} et j'ai ${user.age} and my passion is  ${user.passions[1]}`,
  );
}
display();
