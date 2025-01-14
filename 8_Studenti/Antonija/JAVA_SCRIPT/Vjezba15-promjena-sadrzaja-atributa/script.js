

//var div = document.getElementById("mojid");
//console.log(div);
//console.log(div.textContent);
//console.log(div.innerText);

//1. H1 element sadrzi rijec "Karlovac"
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

//2.span u description div-u je zamjenjen h3 elementom s tekstom "5 rijeka";
var desc = document.guerySelector(".description");
desc.innerHTML = "    Grad na <h3> 5 rijeke</h3>"

//3.div s klasom "info" sadrzi text "Peta rijeka je piva"
var info = document.getElementsByClassName(".info")
console.log(info);

//4.Lista u footer elementu izlistava svig 5 karlovackih rijeka u li elementima
var rijeke = ['Mreznica', 'Kupa', 'korana', 'dobra', 'pivo'];
var footer = document.getElementById("footer");

//var liEl = footer.querySelectorAll("li");
//for (var i=0; i < rijeke.length; i++){
	liEl[i].innerText = rijeke [i];
//}

for (var i=0; i < rijeke.length; i++){
	footer.querySelectorAll("li")[i].innerText = rijeke[i];
}


