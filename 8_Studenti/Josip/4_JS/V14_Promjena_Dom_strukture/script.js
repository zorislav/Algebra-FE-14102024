var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

var infoDiv = document.createElement("Div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

var ul = document.getElementsByTagName("ul");
for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("ill"));
}
