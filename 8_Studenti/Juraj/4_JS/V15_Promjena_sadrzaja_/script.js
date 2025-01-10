// 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	
// 	
// 	- 
// 	- 
	
// 3. Imate zadane vrijednosti:
// 	- pageOffsetY elementa je 1300px
// 	- scrollTop je 200px
// 	- visina korisničkog ekrana je 730px
// 	- visina elementa je 300px
	
// 	Da li je element vidljiv na ekranu? 
// 	U slučaju da nije, koliko mu piksela fali i u kojem smjeru?




// var div = document.getElementById("mojId");
// console.log(div.innerHTML);
// console.log(div.textContent);
// console.log(div.innerText);

// - h1 element sadrži tekst "Karlovac"

var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// - span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka" 

var desc = document.querySelector(".description");
desc.innerHTML = "Grad na <h3>5 rijeka</h3>";

// div s klasom "info" sadrži text "Peta rijeka je piva."

var info = document.getElementsByClassName("info");
info[0].innerText = "Peta je pivo.";

// lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima

var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Pivo"];

var footer = document.getElementById("footer");

for (var i = 0; i < rijeke.length; i++) {
footer.querySelectorAll("li")[i].innerText = rijeke[i];
}