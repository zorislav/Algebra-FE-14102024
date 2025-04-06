// 1. Umjesto circle buleta na elementima liste prikazi redne brojke

var liNiz = document.querySelectorAll("li");

for (var i = 0; i < liNiz.length; i++) {
    liNiz[i].style.listStyleType = "decimal";
}

// 2. Div sa klason info treba dobiti klasu koja će ga sakriti (dodajte u stysheet)

var info = document.querySelector(".info");
info.classList.add("hide");

// 3. Saznajte margin-left izracunati stil koji je primijenjen na body elementu

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

// 4. Animirajte veličinu margine body elementa od početne do 30px i natrag u ponavljajućoj petlji

//body.style.margin = "30px";

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

var mojInterval = setInterval(frame,500);
//clearInterval(mojInterval);

var mojTimeout = setTimeout(function () {
    clearInterval(mojInterval);
}, 10000);
//clearTimeout(mojTimeout);
