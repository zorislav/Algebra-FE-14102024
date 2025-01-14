// 2. Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:
//	- umjesto circle buleta na elementima liste prikaži redne brojke
var li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++)
{
    li[i].style.listStyleType = "decimal";
}

//	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var info = document.querySelector('.info');
info.classList.add("hide");
// info.className = "prvi drugi"; ----> za vise klasa i prepisuje odavde sve u html kod

//	- saznajte margin-left izračunati stil koji je primijenjen na body elementu
var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");

console.log(marginLeft);

//	- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
var marginNum = parseInt(marginLeft); 
var reverse = false;

// console.log(marginNum);

function frame()
{
    if (reverse === true)
    {
        marginNum--;
    }
    else
    {
        marginNum++;
    }

    if (marginNum === 30)
    {
        reverse = true;
    }
    else if (marginNum === 0)
    {
        reverse = false;
    }
    
    body.style.margin = marginNum + "px";
}

var mojInterval = setInterval(frame,500);
// clearInterval(mojInterval);

// var mojTimeout = setTimeout(function ()
// {clearInterval(mojInterval);}, 10000);
//clearTimeout(mojTimeout);