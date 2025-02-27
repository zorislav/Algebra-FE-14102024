//1. - umjesto circle buleta na elementima liste prikažu redne brojke
var li = document.querySelectorAll("li");

for (var i = 0; i < li.length; i++) {
  li[i].style.listStyleType = "decimal";
}

//2. - div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)

var info = document.querySelector(".info");

info.classList.add("hide");

//3. - saznajte margin-left izračunati stil koji je primijenjen na body elementu

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);

var marginLeft = bodyStyles.getPropertyValue("margin-left");

console.log(marginLeft);

//4. - animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var marginNum = parseInt(marginLeft);
var reverse = false;
console.log(marginNum);

function frame() {
  if (reverse) {
    marginNum--;
  } else {
    marginNum++;
  }

  if (marginNum === 30) {
    reverse = true;
  }

  if (marginNum === 0) {
    reverse = false;
  }

  body.style.margin = marginNum + "px";
}

//Objasnjenje funkcija setTimeout setInterval
// setTimeout()   //samo jednom se izvrši funkcija iz prvog parametra, u periodu koji smo definirali u drugom parametru
// clearTimeout()  //poništava timeout metodu

var mojInterval = setInterval(frame, 2000); //izvršava se neprekidno, ili do funkcije clearInterval
// clearInterval(mojInterval)
