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
        const saveButton = document.getElementById("save");
        const loadButton = document.getElementById("load");

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
        
        // Save podataka na firebase
        function saveData(){            
            const listItems = list.getElementsByTagName("li");      

            // ako je list item duzina veca od 0 onda...
            if(listItems.length > 0){
                console.log("saving...");
                // vrti kroz sve indexe list itema i sprema ih na data bazu
                for(let i=0; i < listItems.length; i++){
                    //
                    var divEl = listItems[i].querySelector("div.li-container-int");
                    // Posalji podatak
                    postData(divEl.innerText);
                    // console.log(divEl.innerText);
                }
                alert("Data saved");
            } else {
                alert("nothing to save");
            }
        }

        async function postData(text){

            const postObj = {
                toDoItem: text
            };

            // obrisati podatke
            try {

                await fetch("https://todoproject-28e1b-default-rtdb.europe-west1.firebasedatabase.app/todo.json",{
                    method: "DELETE",
                });

            } catch (err) {
                alert(err);
            }            

            // slanje podataka
            try {

                await fetch("https://todoproject-28e1b-default-rtdb.europe-west1.firebasedatabase.app/todo.json",{
                    method: "POST",
                    body: JSON.stringify(postObj),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            } catch (err) {
                alert(err);
            }

        }

        // Dohvacanje podataka sa databaze
        async function getData(){

            try {
                const response = await fetch("https://todoproject-28e1b-default-rtdb.europe-west1.firebasedatabase.app/todo.json");
                const responseData = await response.json();
                
                return responseData;

            } catch(error){
                alert(error);
            }
        }

        // Load podataka sa firebase
        async function loadData(){
            const listItems = list.getElementsByTagName("li");

            if (listItems.length !== 0 && listItem === data[item].toDoItem){
                const answer = confirm("Replace current list?");
                if(answer)
                {
                    for (let i = listItems.length-1; i >= 0; i--)
                        {
                            listItems[i].remove();
                        }
                } 
            }
            console.log("loading...");
            const data = await getData();

            for(var item in data){
                 // kreiraj novi list item sa podatcima sa databaze
                 const newItem = createListItem(data[item].toDoItem);
                  // dodaj novi list item 
                  list.appendChild(newItem);
            }   
        }

        

        // dodavanje event listener za postojoce sekcije u html dokumentu
        this.addListeners = function() {
            addButton.addEventListener("click", addListItem);
            allButton.addEventListener("click", showAll);
            completedButton.addEventListener("click", showCompleted);
            activeButton.addEventListener("click", showActive);
            clearAllCompletedButton.addEventListener("click", removeAllCompleted);
            saveButton.addEventListener("click", saveData);
            loadButton.addEventListener("click", loadData);
        };
    }

    // dodavanje novog prototip svojstva unutar postojeceg objekta Todo
    Todo.prototype.init = function() {
        this.addListeners();
    };

    // Kreiranje novog objekta pomocu postojeceg
    const todo = new Todo();

    window.addEventListener("load", todo.init())
})();