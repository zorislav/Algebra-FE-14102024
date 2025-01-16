//Na pocetak dodati h1 element

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);


//Ispod diva s klasom "description" uumetnuti novi div s klasom "info"

var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextElementSibling);

//3.lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata 

//var ul = document.getElementsByTagName("ul");
//for (var i =0; i < 3; i ++) {
//ul[0].appendChild(document.createElement("li"));
  
//}

//console.log(ul[0]);

var ul = document.getElementsById("ul");
for (var i =0; i < 3; i ++) {
ul[0].appendChild(document.createElement("li"));
  
}


