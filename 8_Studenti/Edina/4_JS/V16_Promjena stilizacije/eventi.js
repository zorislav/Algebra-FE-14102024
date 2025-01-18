// var button = document.getElementById("btn");

// function onClickHandler() {
//   console.log("Opet sam kliknuo");
// }

// // button.onClick = onClickHandler;

//2. nacin

//3.nacin:

var button = document.getElementById("btn");

function onClickHandler(event) {
  console.log("Opet sam kliknuo");
}

button.addEventListener("click", onClickHandler);
