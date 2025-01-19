//2. nacin (kao svojstvo na elementu)

var button = document.getElementById("btn");

function onClickHandler() {
  console.log("Opet sam kliknuo");
}

button.onClick = onClickHandler;

//3.nacin: (addEventListener)

var button = document.getElementById("btn");

function onClickHandler(event) {
  console.log("Opet sam kliknuo");
}

button.addEventListener("click", onClickHandler);
