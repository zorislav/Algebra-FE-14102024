// 	- umjesto circle buleta na elementima liste prikaži redne brojke

var li = document.querySelectorAll("li");

for (var i = 0; i < li.length; i++) {
  li[i].style.listStyleType = "decimal";
}

console.log("li");

// 	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)

var info = document.querySelector(".info");
info.classList.add("hide"); //ako napisemo remove obrisali bi

// 	- saznajte margin-left izračunati stil koji je primijenjen na body elementu

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);

var marginLeft = bodyStyles.getPropertyValue("margin-left");

console.log(marginLeft);

// 	- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var marginNum = parseInt(marginLeft); //ova metoda parseInt konvertira STRING u INTEGER (8px u broj 8 konvertira)
var reverse = false;

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

var mojInterval = setInterval(frame, 2000); // setInterval izvršava funkciju frame svake  2 sekunde

var mojTimeout = setTimeout(function () {
  clearInterval(mojInterval);
}, 10000);
