const name_item = document.querySelectorAll(".name-item");
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  console.log(value);
  for (let i = 0; i < name_item.length; i++) {
    const text = name_item[i].textContent.toLowerCase();

    if (text.includes(value)) {
      name_item[i].style.display = "block";
    } else {
      name_item[i].style.display = "none";
    }
  }
});
