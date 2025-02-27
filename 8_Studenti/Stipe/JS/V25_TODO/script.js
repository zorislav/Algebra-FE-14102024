(function(){

    function Todo(){

        const input = document.querySelector("#input-text");
        const addButton = document.querySelector("#input-add");
        const list = document.querySelector("ul");


        
        function addListItem(){
            let text = input.value;

            if(text.trim().length !== 0){

                //kreiraj novi list item
                const newItem = createListItem(text);
                list.appendChild(newItem);
                //dodaj list item

                input.value = "";

            } else{
                alert("pleas enter todo!");
            }

        }

        function createListItem(text){
            const listItem = document.createElement("li");
            const div = document.createElement("div");
            const intDiv = document.createElement("div");
            intDiv.classList.add("")
            div.appendChild(intDiv);
            div.classList.add("li-conteiner");
            addCheckBox(intDiv);
            listItem.appendChild(div);
            addRemoveButton(div);
            //listItem.innerText = text;


            return listItem;
        }

        function addRemoveButton(element){
            const removeButton = document.createElement("div");
            
            removeButton.innerText = "X";
            removeButton.className ="removeButton";
            removeButton.addEventListener("click",removeListItem)
            element.appendChild(removeButton);
        }

        function removeListItem(event){
            const removeButton = event.target;
            removeButton.parentNode.parentNode.remove();

        }


        function addCheckBox(){
            const CheckBox = document.createElement("input");
            CheckBox.setAttribute("type","checkbox");
            CheckBox.addEventListener("click", createListItem)
            element.insertBefore(CheckBox,element.firstChild);

        }

        function checkListItem(event){

            const checkBox = event.target;
            if(checkBox.checked){
                checkBox.parentNode.style.textDecoration="line-trougnt";

            } else {
                checkBox.parentNode.style.textDecoration="";

            }

        }

        this.addListener =function(){
            addButton.addEventListener("click",addListItem);
        };


    }

    Todo.prototype.init = function(){
        this.addEventListener();
    };

    const todo = new Todo();

    window.addEventListener("load",todo.init());

})();