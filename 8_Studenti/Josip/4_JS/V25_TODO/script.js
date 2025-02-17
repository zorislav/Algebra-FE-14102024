(function () {
  function Todo() {
    const input = document.querySelector("#input-text");
    const addButton = document.querySelector("#input-add");
    const list = document.querySelector("ul");

    function addListItem() {
      const text = input.value;

      if (text.trim().length !== 0) {
        const newItem = createListItem(text);
        list.appendChild(newItem);

        input.value = "";
      } else {
        alert("Please enter a todo!");
      }
    }

    function createListItem(text) {
      const listItem = document.createElement("li");
      const div = document.createElement("div");
      const intDiv = document.createElement("div");
      div.classList.add("li-container");
      intDiv.classList.add("li-container-int");
      intDiv.innerText = text;
      addCheckBox(intDiv);
      div.appendChild(intDiv);
      addRemoveButton(div);
      listItem.appendChild(div);

      return listItem;
    }

    function addCheckBox(element) {
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.addEventListener("click");
      element.insertBefore(checkBox, element.firstChild);
    }

    function addRemoveButton(element) {
      const removeButton = document.createElement("div");
      removeButton.innerText = "X";
      removeButton.className = "removeButton";
    }

    this.addListeners = function () {
      addButton.addEventListener("click", addListItem);
    };
  }

  Todo.prototype.init = function () {
    this.addListeners();
  };

  const todo = new Todo();

  window.addEventListener("load", function () {
    todo.init();
  });
})();
