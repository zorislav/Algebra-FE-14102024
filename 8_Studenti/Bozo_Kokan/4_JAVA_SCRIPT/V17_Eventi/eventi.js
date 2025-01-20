var button = document.getElementById("btn");
function onClickHandler ()
{
    console.log("Kliknuo sam");
}

//button.onclick = onClickHandler;

// Event listener 
button.addEventListener("click", onClickHandler);