var button = ocument.getElementById("btn");
function onClickHandler(){
console.log("opet sam kliknuo");
}

//button.onclick = onClickHandler;
button.addEventListener("click", onClickHandler);


