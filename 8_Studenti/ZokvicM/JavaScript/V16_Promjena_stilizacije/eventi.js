var button = document.getElementById("btn");
function onClickHandler(){
  console.log("Klikanje u beskraj...");
}

//button.onclick = onClickHandler;
button.addEventListener("click", onClickHandler);