//s ovom samopozivajucom anonimnom funkcijom izdvajamo naš kod iz GLOBALNOG prostora (stavljamo ga u zaštićeni prostor kao)

(function () {
  function Todo() {
    const input = document.querySelector("#input-text");
    const addButton = document.querySelector("#input-add");
    const allButton = document.querySelector("#button-all");
    const activeButton = document.querySelector("#button-active");
    const completedButton = document.querySelector("#button-completed");

    function addListItem() {
      let text = input.value;

      if (text.trim().lenght !== 0) {
        const newItem = createListItem(text);
        const list = document.querySelector(".ul-todo");
        list.appendChild(newItem);

        input.value = "";
      } else {
        alert("Please enter todo");
      }
    }

    function createListItem(text) {
      const listItem = document.createElement("li");
      const div = document.createElement("div");
      const intDiv = document.createElement("div");
      div.classList.add("li-container");
      intDiv.classList.add("li-container-int");
      intDiv.innerText = text;
      addCheckbox(intDiv);
      div.appendChild(intDiv);
      listItem.appendChild(div);
      addRemoveButton(div);

      return listItem;
    }

    function addCheckbox(element) {
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.addEventListener("click", checkListItem);
      element.insertBefore(checkBox, element.firstChild);
    }

    function addRemoveButton(element) {
      const removeButton = document.createElement("div");
      removeButton.innerText = "X";
      removeButton.className = "removeButton";
      removeButton.addEventListener("click", removeListItem);
      element.appendChild(removeButton);
    }

    function checkListItem(event) {
      const checkBox = event.target;

      if (checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "";
      }
    }

    function removeListItem(event) {
      const removeButton = event.target;
      removeButton.parentNode.parentNode.remove();
    }

    function showAll() {
      const listItems = list.getElemenstByTagName("li");

      for (let i = 0; i < listItems.lenght; i++) {
        listItems[i].style.display = "";
      }
      allButton.disabled = true;
      activeButton.disabled = false;
      completedButton.disabled = false;
    }

    function showActive() {
      const listItems = list.getElemenstByTagName("li");

      for (let i = 0; i < listItems.lenght; i++) {
        const check = listItems[i].getElemenstByTagName("input");
        if (check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }
      allButton.disabled = false;
      activeButton.disabled = true;
      completedButton.disabled = false;
    }

    function showCompleted() {
      const listItems = list.getElemenstByTagName("li");

      for (let i = 0; i < listItems.lenght; i++) {
        const check = listItems[i].getElemenstByTagName("input");
        if (!check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }
      allButton.disabled = false;
      activeButton.disabled = false;
      completedButton.disabled = true;
    }

    this.addListeners = function () {
      addButton.addEventListener("click", addListItem);
      allButton.addEventListener("click", showAll);
      activeButton.addEventListener("click", showActive);
      completedButton.addEventListener("click", showCompleted);
    };
  }

  Todo.prototype.init = function () {
    this.addListeners();
  };

  const todo = new Todo();

  window.addEventListener("load", todo.init()); //kada se dokument loada (kada se skripta učita), izvrsiti ce se funkcija init koja je definirana na prototipu konstruktor funkcije Todo, a koja je i na raspolaganju onda našem objektu todo
})();
