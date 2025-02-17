(function () {
  function ToDo() {
    const input = document.querySelector("#input-todo");
    const addButton = document.querySelector("#input-add");
    const todoList = document.querySelector("ul");

    function addToDo() {
      let ToDoItem = input.value;

      if (ToDoItem.trim().length == 0) {
        alert("Praznoooo!");
      } else {
        const newItem = createLiEl(ToDoItem);
        todoList.appendChild(newItem);
        input.value = "";
      }
    }

    function createLiEl(ToDoItem) {
      const LiEl = document.createElement("li");
      const div = document.createElement("div");
      const int_div = document.createElement("div");
      div.classList.add("li-cont");
      int_div.classList.add("li-cont-int");
      int_div.innerText = ToDoItem;
      addCheckbox(int_div);
      div.appendChild(int_div);
      removeElement(div);
      LiEl.appendChild(div);

      return LiEl;
    }

    function addCheckbox(el) {
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.addEventListener("click", checkListItem);
      el.insertBefore(checkBox, el.firstChild);
    }

    function removeElement(el) {
      const removeButton = document.createElement("div");
      removeButton.innerText = "X";
      removeButton.className = "remove-button";
      removeButton.addEventListener("click", removeButton);
      removeButton.addEventListener("click", removeLi);

      el.appendChild(removeButton, el.firstChild);
    }

    function checkListItem(event) {
      const checkBox = event.target;
      if (checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "";
      }
    }

    function removeLi(event) {
      const removeElement = event.target;
      removeElement.parentNode.parentNode.remove();
    }

    this.addListeners = function () {
      addButton.addEventListener("click", addToDo);
    };
  }

  ToDo.prototype.init = function () {
    this.addListeners();
  };

  const todo = new ToDo();

  window.addEventListener("load", todo.init());
})();
