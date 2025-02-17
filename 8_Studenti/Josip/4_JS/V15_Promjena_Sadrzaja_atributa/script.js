var div = document.getElementById("mojid");
console.log(div.innerHTML);
console.log(div.textContent);
console.log(div.innerText);

var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

var desc = document.querySelector(".description");
desc.innerHTML = "Grad na <h3>5 rijaka </h3>";

var info = document.getElementsByClassName("info");
console.log(info);
info.innerText = "Peta je pivo";

var rijeke = ["Mreznica", "Kupa", "Pivo"];
var footer = document.getElementById("footer");

/* var liEl = footer.querySelectorAll("li");
for (var i=0; i < rijeke.length; i++){
  liEl[i].innerText = rijeke[i];
} */

for (var i = 0; i < rijeke.length; i++) {
  footer.querySelectorAll.innerText = rijeke[i];
}
