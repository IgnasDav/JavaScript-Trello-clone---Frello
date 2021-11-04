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
    listText.remove();
    const listClass = document.createElement("div");
    const listInput = document.createElement("input");
    const btnAdd = document.createElement("button");
    const btnDiv = document.createElement("div");
    const btnDelete = document.createElement("p");

    btnAdd.classList.add("main__list__btnAdd");
    btnDiv.classList.add("main__list__btnDiv");
    btnDelete.classList.add("main__list__btnDlt");
    btnAdd.textContent = "Add List";
    btnDelete.innerHTML = `<i class="fas fa-times"></i>`;
    listInput.classList.add("main__list__input");
    listInput.innerHTML = `<input type="text">`;
    listInput.type = "text";
    btnDiv.append(btnAdd, btnDelete);
    listClass.append(listInput, btnDiv);
    list.append(listClass);

    document.addEventListener("click", (e) => {
      if (e.target.className === "main") {
        list.append(listText);
        listClass.remove();
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  createList();
});
