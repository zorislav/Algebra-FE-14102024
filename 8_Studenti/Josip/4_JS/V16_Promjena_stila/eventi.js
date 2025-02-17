var button = document.getElementById("button");
function onClickHandler(e) {
  console.log("Opet sam kliknuo");
}

/* button.onclick = onClickHandler; */

button.addEventListener("click", onClickHandler);
