//- se na početak dodati h1 element

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

//- ispod diva sa klasom "description" se umetne novi div sa klasom "info"

var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

//- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var ul = document.getElementsByTagName("ul");
for(var i = 0; i < 3; i++)
{
    ul[0].appendChild(document.createElement("li"));
}


//console.log(ul[0]);

// var ul = document.getElementsById("list");
// for(var i = 0; i < 3; i++)
// {
//     ul.appendChild(document.createElement("li"));
// }
// alternativno ako ima id u segmentu bez id mora se selektirati koji elemnet zelimo selektirati (exm. ul[0])