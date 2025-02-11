// 1. umjesto circle buleta na elementima liste prikažu redne brojke
	
var li = document.querySelectorAll("li");

for(var i=0; i < li.length; i++) {
    li[i].style.listStyleType = "decimal";
}

console.log(li);


// 2. div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
	
var info = document.querySelector(".info"); 
info.classList.add("hide");

// 3. saznajte margin-left izračunati stil koji je primijenjen na body elementu
	
var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");

console.log(marginLeft);
// 4. animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji


var marginNum = parseInt(marginLeft);
var reverse = false;


function frame() {

    if(reverse) {
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
  

    body.style.margin = marginNum + "30px";
    
}

// var mojInterval = setInterval(frame, 2000);
// // clearInterval(mojInterval);

// var mojTimeout = setTimeout(frame, 10000);
// clearTimeout(mojTimeout);


// console.log("Bok");