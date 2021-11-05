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
    listClass.classList.add("main__list__div");
    btnAdd.classList.add("main__list__btnAdd");
    btnDiv.classList.add("main__list__btnDiv");
    btnDelete.classList.add("main__list__btnDlt");
    btnAdd.textContent = "Add List";
    btnDelete.innerHTML = `<i class="fas fa-times"></i>`;
    listInput.classList.add("main__list__input");
    listInput.type = "text";
    btnDiv.append(btnAdd, btnDelete);
    listClass.append(listInput, btnDiv);
    list.append(listClass);

    function removeInput() {
      list.append(listText);
      listClass.remove();
    }

    document.addEventListener("click", (e) => {
      if (e.target.className === "main") {
        removeInput();
      }
    });

    btnDelete.addEventListener("click", () => {
      removeInput();
    });

    btnAdd.addEventListener("click", () => {
      if (listInput.value === "") {
      } else {
        const listName = document.createElement("div");
        const listNameParagraph = document.createElement("p");
        const listNameDots = document.createElement("div");
        const addCard = document.createElement("div");

        listNameDots.classList.add("main__list__input__card__dots");
        listName.classList.add("main__list__input__card");
        addCard.classList.add("main__list__input__card__add");

        addCard.innerHTML = `<i class="fas fa-plus"></i> Add a card`;
        listNameDots.textContent = "...";
        listNameParagraph.textContent = listInput.value;

        listInput.remove();
        btnDiv.remove();
        listName.append(listNameParagraph, listNameDots);
        listClass.prepend(listName, addCard);

        addCard.addEventListener("click", () => {});
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  createList();
});
