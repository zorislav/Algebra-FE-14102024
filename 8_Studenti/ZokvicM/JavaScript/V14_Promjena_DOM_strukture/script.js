// 1. Na početak dodati h1 element
var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

// 2. Ispod diva sa klasom "description" umetnuti novi div sa klasom "info"
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

// 3. Lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata
// var ul = document.getElementsByTagName("ul");
// for (var i = 0; i < 3; i++) {
//   ul[0].appendChild(document.createElement("li"));
// }

var ul = document.getElementById("list");
for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}