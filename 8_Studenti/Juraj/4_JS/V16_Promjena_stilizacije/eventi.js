var button = document.getElementById("btn");
function onClickHandler(e) {
    console.log("Opet sam kliknuo")
}

// button.onclick = onClickHandler;

button.addEventListener("click", onClickHandler);
