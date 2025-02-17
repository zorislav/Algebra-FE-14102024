(function() {
    
    function Todo() {

        const input = document.querySelector("#input-text");
        const addButton = document.querySelector("#input-add");
        const list = document.querySelector("ul");
        const allButton = document.querySelector("#button-all");
        const activeButton = document.querySelector("#button-active");
        const completedButton = document.querySelector("#button-completed");
        const clearAllCompletedButton = document.querySelector("#button-clear-completed");

        function internaFunkcija(){}
        
        function addListItem() {
            let text = input.value;

            if(text.trim().length !== 0) {
                
                const newItem = createListItem(text);
                list.appendChild(newItem);
                input.value = "";

            } else {
                alert("Please enter todo!");
            };
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
            checkBox.setAttribute("type", "checkBox");
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
            if(checkBox.checked) {
                checkBox.parentNode.style.textDecoration = "line-through";
            } else {
                checkBox.parentNode.style.textDecoration = "";
            }
        }

        function removeListItem(event) {
            const removeButton = event.target;
            removeButton.parentNode.parentNode.remove();
        }

        function showAll(){
            const listItems = list.getElementsByTagName("li");

            for(let i = 0; i < listItems.length; i++){
                listItems[i].style.display = "";
            }

            allButton.disbled = true;
            activeButton.disbled = false;
            completedButton.disbled = false;
        }

        function showActive(){
            const listItems = list.getElementsByTagName("li");

            for(let i = 0; i < listItems.length; i++){
                const check = listItems[i].getElementsByTagName("input");
                if(check[0].checked){
                    listItems[i].style.display = "none";
                } else {
                    listItems[i].style.display = "";
                }
            }

            allButton.disbled = false;
            activeButton.disbled = true;
            completedButton.disbled = false;
        }

        function showCompleted(){
            const listItems = list.getElementsByTagName("li");

            for(let i = 0; i < listItems.length; i++){
                const check = listItems[i].getElementsByTagName("input");
                if(!check[0].checked){
                    listItems[i].style.display = "none";
                } else {
                    listItems[i].style.display = "";
                }
            }

            allButton.disbled = false;
            activeButton.disbled = false;
            completedButton.disbled = true;
        }

        function removeAllCompleted() {
            const listItems = list.getElementsByTagName("li");

            for(let i=listItems.length - 1; i >= 0; i--) {
                const check = listItems[i].getElementsByTagName("input");
                if(check[0].checked){
                    listItems[i].remove();
                }
            }
        }

        this.addListeners = function(){
            addButton.addEventListener("click", addListItem);
            allButton.addEventListener("click", showAll);
            activeButton.addEventListener("click", showActive);
            completedButton.addEventListener("click", showCompleted); 
            clearAllCompletedButton.addEventListener("click", removeAllCompleted)   
        }

    }

    Todo.prototype.init = function() {
        this.addListeners();
    }

    const todo = new Todo();

    window.addEventListener("load", todo.init());
})();