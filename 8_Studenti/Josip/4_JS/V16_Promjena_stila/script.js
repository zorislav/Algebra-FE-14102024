var li = document.querySelectorAll("li");

for (var i = 0; i < li.length; i++) {
  li[i].style.listStyleType = "decimal";
}

var info = document.querySelector(".info");
info.classList.add("hide");

var body = document.querySelector("body");
var bodyStyle = window.getComputedStyle(body, null);
var marginLeft = bodyStyle.getPropertyValue("margin-left");
console.log(marginLeft);

/* body.style.margin = "30px"; */

function frame() {
  console.log("Bok");
}

setTimeout(frame, 5000);

var mojInterval = setInterval(frame, 2000);

var mojTimeout = setTimeout(function () {
  clearInterval(mojInterval);
}, 10000);
clearInterval(mojInterval);
