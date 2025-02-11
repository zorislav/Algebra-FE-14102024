// 1. Umjesto circle buleta na elementima liste prikaži redne brojke.

var liNiz = document.querySelectorAll("li");

for (var i=0; i < liNiz.length; i++){
    liNiz[i].style.listStyleType = "decimal";
}

// 2. Div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet).

var info = document.querySelector(".info");
info.classList.add("hide");
// info.className = "prvi drugi";

// 3. Saznajte margin-left izračunati stil koji je primijenjen na body elementu.
var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

// 4. Animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji.

var marginNum = parseInt(marginLeft);
var reverse = false;

console.log(marginNum);

function frame(){

    if(reverse){
        marginNum--;  
    } else{
        marginNum++;  
    }

    if(marginNum === 30){
        reverse = true;
    }

    if(marginNum === 0){
        reverse = false;
    }

    body.style.margin = marginNum + "px";
}

var mojInterval = setInterval(frame, 2000);

// var mojTimeout = setTimeout(function (){
//     clearInterval(mojInterval);
// }, 10000);
// // clearTimeout(mojTimeout);