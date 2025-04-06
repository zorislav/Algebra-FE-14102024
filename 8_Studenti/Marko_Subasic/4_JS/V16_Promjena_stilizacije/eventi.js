var button = document.getElementById("btn");

//button.onclick = onClickHandler;
button.addEventListener("click", onClickHandler);

function onClickHandler(e) {
  console.log("Opet sam kliknuo!");
}
