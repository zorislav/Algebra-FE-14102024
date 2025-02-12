// var div = document.getElementById("mojid");
// console.log(div.innerHTML);
// console.log(div.textContent);
// console.log(div.innerText);

// 1.  h1 element sadrži tekst "Karlovac"
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// 2. span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
var desc = document.querySelector(".description");
desc.innerHTML = "Grad na <h3>5 rijeka</h3>";

// 3. div s klasom "info" sadrži text "Peta rijeka je piva."
var info = document.getElementsByClassName("info");
info[0].innerText = "Peta je pivo.";

// 4. lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima
var rijeke = ["Mreznica", "Kupa", "Korana", "Dobra", "Pivo"];
var footer = document.getElementById("footer");

// var liEl = footer.querySelectorAll("li");
// for (var i = 0; i < rijeke.length; i++) {
//   liEl[i].innerText = rijeke[i];
// }

for (var i = 0; i < rijeke.length; i++) {
  footer.querySelectorAll("li")[i].innerText = rijeke[i];
}
