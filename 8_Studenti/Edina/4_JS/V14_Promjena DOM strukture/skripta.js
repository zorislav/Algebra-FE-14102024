// 1.Dodati h1 element na početak

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1); //prepend dodaje element IZNAD elementa

// 2. Ispod diva sa klasom "description" umetnuti novi div sa klasom "info"

var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling); //prvi element je onaj kojeg umecemo a drugi element je lokacija na koju umecemo element

// 3. lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var ul = document.getElementsByTagName("ul");
for (var i = 0; i < 3; i++) {
  ul[0].appendChild(document.createElement("li")); //appendChild dodaje element ISPOD elementa
}

console.log(ul[0]);
