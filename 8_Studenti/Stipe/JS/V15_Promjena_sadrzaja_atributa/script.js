//var div = document.getElementById("mojid");
//console.log(div.innerHTML);
//console.log(div.textContent);
//console.log(div.innerText);

// dodati sadržaj teksta "karlovac" u h1
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac"

//span u description div elementu zamjeni sa h3 elementom i tekst 5 rijeka
var desc = document.querySelector(".opis");
desc.innerHTML = "Grad na <h3> 5 rijeka</h3>";

//div sadr
var info = document.getElementsByClassName("info");
info[0].innerText = "Peta je piva";
// rijeke u listu
var rijeke = ['Mreznica','Kupa','Korana','Mreznica'];
var footer = documenet.getElementById("footer");
for ( var i=0; i< rijeke.length; i++){
    footer.querySelectorAll("li")[i].innerText = rijeke[i];
}

