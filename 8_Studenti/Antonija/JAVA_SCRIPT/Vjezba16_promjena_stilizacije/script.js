//1. Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:
	//- umjesto circle buleta na elementima liste prikažu redne brojke

  var li = document.querySelectorAll("li")

  for (var i=0; i < 5; i++){
 li[i].style.listStyleType = "decimal";
  }

  //-2. div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
  var info = document.querySelector(".info");
  //info.classList.add("hide");

  info.className = "prvi drugi";

  //- 3. saznajte margin-left izračunati stil koji je primijenjen na body elementu

  var body = document.querySelector("body");
  var bodyStyles = window.getComputedStyle(body, null);
  var marginLeft = bodyStyles.getPropertyValue("margin-left")
  console.log(marginLeft);

	//4.- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

  //body.style.margin = "30px";

  var marginNum = parseIn(marginLeft);
  var reverse = false;

  console.log(marginNum);

  function frame (){

    if(reverse){
      marginNum--;
    } else {
      marginNum++;
    }

    if(marginNum === 30) {
      reverse = true;
    } if(marginNum === 0) {
      reverse = false; 
    }
  

  body.style.margin = marginNum + "px";
  var mojTimeout = setTimeout(frame, 2000);

//body.style.margin = "30px";
  }

  var mojTimeout = setTimeout(frame, 2000);
  //clearTimeout(mojTimeout);

  //var mojTimeout = setTimeout(function (){
    //clearInterval(mojInterval);
  //}, 10000);
  //clearInterval(mojInterval);

  //var mojInterval = setInterval (frame, 2000);









