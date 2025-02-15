(function() {

    // Novi objekt
    function Todo() {

        // Vezanje classa iz htmla u scriptu
        const inputText = document.querySelector("#input-text");
        const addButton = document.querySelector("#input-add");
        const list = document.querySelector("ul");
        const allButton = document.querySelector("#button-all");
        const activeButton = document.querySelector("#button-active");
        const completedButton = document.querySelector("#button-completed");
        const clearAllCompletedButton = document.querySelector("#button-clear-completed");

        // Kreiranje funkcije za provjeru input texta od korisnika
        function addListItem() {
            let text = inputText.value;

            if (text.trim().length !== 0) {

                // kreiraj novi list item
                const newItem = createListItem(text);
                // dodaj novi list item 
                list.appendChild(newItem);
                inputText.value = "";

            } else { 
                alert("Please enter todo!")
            }
        }

        // nakon kreiranja list itema dodavanje texta unutar list itema i postavljanje redostljeda dodanih elementa radi vizualnosti i dodavanje funckija za novo kreirane elemente sa event listenerima
        function createListItem(text) {

            const listItem = document.createElement("li");
            const div = document.createElement("div");
            const intDiv = document.createElement("div");
            div.classList.add("li-container");
            intDiv.classList.add("li-container-int");
            
            // dodavanje texta nakon user inputa i klika na add
            intDiv.innerText = text;
            // dodavanje check boxa unutar div elementa koji je parent
            addCheckBox(intDiv);
            // kreiranje div elemnta nakon diva koji je parent
            div.appendChild(intDiv);
            // brise odabrani div element pomocu X koji smo stavili kao simulaciju buttona
            addRemoveButton(div);
            // dodavanje list itema nakon diva
            listItem.appendChild(div);

            return listItem;
        }  

        // dodavanje check box funkcije sa event listeneron
        function addCheckBox(element) {
            const checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.addEventListener("click", checkListItem)
            element.insertBefore(checkBox, element.firstChild);
        }

        // dodavanje remove button pomocu div elemnta koji ima inner text kao X za simulaciju buttona i event listenera za taj novo kreirani element
        function addRemoveButton(element) {
            const removeButton = document.createElement("div");
            removeButton.innerText = "X";
            removeButton.className = "removeButton";
            removeButton.addEventListener("click", removeListItem)

            element.appendChild(removeButton);
        }

        // ako se klikne check box da se stavi linija kroz tekst
        function checkListItem(event) {

            const checkBox = event.target;
            if(checkBox.checked) {
                checkBox.parentNode.style.textDecoration = "line-through";
            } else {
                checkBox.parentNode.style.textDecoration = "";
            }
        }

        // kreiranje eventa za klick na X za removanje tog list itema
        function removeListItem() { 
            const removeButton = event.target;
            removeButton.parentNode.parentNode.remove();
        }

        // prikaz svih list itema
        function showAll() {
            const listItems = list.getElementsByTagName("li");

            for (let i = 0; i < listItems.length; i++){
                    listItems[i].style.display = "";
            }

            allButton.disabled = true;
            activeButton.disabled = false;
            completedButton.disabled = false;
        }

        // prikaz samo list itema koji nemaju ukljucen check box
        function showActive() {
            const listItems = list.getElementsByTagName("li");
            
            for (let i = 0; i < listItems.length; i++){
                const check = listItems[i].getElementsByTagName("input");
                if (check[0].checked){
                    listItems[i].style.display = "none";
                } else {
                    listItems[i].style.display = "";
                }
            }

            allButton.disabled = false;
            activeButton.disabled = true;
            completedButton.disabled = false;
        }

        // prikaz samo list itema koji imaju ukljucen check box
        function showCompleted() {

            const listItems = list.getElementsByTagName("li");
            
            for (let i = 0; i < listItems.length; i++){
                const check = listItems[i].getElementsByTagName("input");
                if (!check[0].checked){
                    listItems[i].style.display = "none";
                } else {
                    listItems[i].style.display = "";
                }
            }

            allButton.disabled = false;
            activeButton.disabled = false;
            completedButton.disabled = true;
        }

        // dodavanje remove opcije
        function removeAllCompleted() {
            const listItems = list.getElementsByTagName("li");
            for (let i = listItems.length-1; i >= 0; i--)
            {
                const check = listItems[i].getElementsByTagName("input");
                if (check[0].checked){
                    listItems[i].remove();
                }
            }
        }

        // dodavanje event listener za postojoce sekcije u html dokumentu
        this.addListeners = function() {
            addButton.addEventListener("click", addListItem);
            allButton.addEventListener("click", showAll);
            completedButton.addEventListener("click", showCompleted);
            activeButton.addEventListener("click", showActive);
            clearAllCompletedButton.addEventListener("click", removeAllCompleted);
        }
    }

    // dodavanje novog prototip svojstva unutar postojeceg objekta Todo
    Todo.prototype.init = function() {
        this.addListeners();
    };

    // Kreiranje novog objekta pomocu postojeceg
    const todo = new Todo();

    window.addEventListener("load", todo.init())
})();