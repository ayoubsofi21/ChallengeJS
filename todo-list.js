const itemInput = document.getElementById("item-input");
const addButton = document.querySelector("#add-item-btn");
const itemList = document.getElementById("item-list");
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn text-white bg-red-500 px-2 rounded  ";
  li.className = "flex justify-between";
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
  li.textContent = itemInput.value;
  itemList.appendChild(li);
  li.appendChild(deleteBtn);
  itemInput.value = "";
});
