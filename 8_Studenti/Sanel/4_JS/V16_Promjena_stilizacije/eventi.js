var button = document.getElementById("btn");

function onClickHandler(e) {
    console.log("Kliknuo sam!");
}

// button.onclick = onClickHandler;
button.addEventListener("click", onClickHandler);