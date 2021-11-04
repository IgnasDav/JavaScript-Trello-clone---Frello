"use strict";

function createList() {
  const list = document.createElement("div");
  let listText = document.createElement("div");
  list.classList.add("main__list");
  listText.classList.add("main__list__text");
  listText.innerHTML = `<i class="fas fa-plus"></i> Add another list`;
  document.querySelector(".main").append(list);
  list.append(listText);

  listText.addEventListener("click", () => {
    //Creating and adding item
    listText.classList.toggle("hidden");
    const listClass = document.createElement("div");
    const listInput = document.createElement("input");
    const btnAdd = document.createElement("button");
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("main__list__btnDiv");
    btnAdd.textContent = "Add List";
    const btnDelete = document.createElement("p");
    btnDelete.innerHTML = `<i class="fas fa-times"></i>`;
    btnDiv.append(btnAdd, btnDelete);
    listClass.append(listInput, btnDiv);
    listInput.classList.add("main__list__input");
    list.append(listClass);
    listInput.innerHTML = `<input type="text">`;
    listInput.type = "text";

    document.addEventListener("click", (e) => {
      if (e.target.className === "main") {
        listText.classList.toggle("hidden");
        listClass.classList.toggle("hidden");
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  createList();
});
