//na početak dodati h1 element

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

//ispo diva umetniti novi div sa klasom info

var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

//lista u footeru

var ul = document.getElementsByTagName("ul");
for(var i=0; i<3; i++){
    ul[0].appendChild(document.createElement("li"));
}


//console.log(ul[0]);