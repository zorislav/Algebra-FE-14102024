//umjesto circle buleta na elementima prikazi redne brojke
var li = document.querySelectorAll("li");
console.log(li);
//li.style.listStyleType = "decimal";
for ( var i = 0; i< li.length; i++){
    li[i].style.listStyleType = "decimal";
}
// div sa klasom info treba dobiti klasu koja ga sakriva
var info = document.querySelector(".info");
info.classList.add("hide");
//info.className = "prvi drugi";

//saznaj margin-left izračunati stil koji je primjenjen na body
var body = document.querySelector("body");
var bodyStyless = window.getComputedStyle(body,null);
var marginLeft = bodyStyless.getPropertyValue("margin-left");
console.log(marginLeft);

//animiraj veličinu margine body elementa od početne do 30px i natrag u ponavljajucoj petlji

var marginNum = parseInt(marginLeft);
var reverse = false;

console.log(marginNum);

function frame(){

    if(reverse){
      marginNum--;
    } else{
      marginNum++;  
    }

    if (marginNum === 30){
        reverse = true;
    }

    if (marginNum === 0){
        reverse = false;
    }

    

    

    body.style.margin = marginNum + "px";
}
var mojInterval = setInterval(frame,2000);
//var mojTimeout = setTimeout(function(){
 //   clearInterval(mojInterval);
//},10000);
//clearTimeout(mojTimeout);

//clearInterval(mojInterval);
