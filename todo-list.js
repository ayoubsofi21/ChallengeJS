const itemInput = document.getElementById("item-input");
const addButton = document.querySelector("#add-item-btn");
const itemList = document.getElementById("item-list");
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = itemInput.value;
  itemList.appendChild(li);
  itemInput.value = "";
});
