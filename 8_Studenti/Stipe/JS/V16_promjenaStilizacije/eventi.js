var button = document.getElementById("btm");

function onClickHandler(){
    console.log("opet sam kliknuo");
}
//button.onclick = onClickHandler;
button.addEventListener("click",onClickHandler);