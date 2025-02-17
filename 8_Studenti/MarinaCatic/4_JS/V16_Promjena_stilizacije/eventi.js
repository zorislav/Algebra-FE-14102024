var button = document.getElementById("btn");

function onClickHandler() {
    console.log("Opet sam kliknula");
}

// button.onclick = onClickHandler
button.addEventListener("click", onClickHandler);