var li = document.querySelectorAll("li");

//li.style.listStyleType = "decimal";

for (var i = 0; i < 5; i++) {
  li[i].style.listStyleType = "decimal";
}

var info = document.querySelector(".info");
info.classList.add("hide");

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginleft = bodyStyles.getPropertyValue("margin-left");
console.log(marginleft);

var marginNUm = parseInt(marginleft);
var reverse = false;

function frame() {
  if (reverse) {
    marginNUm--;
  } else {
    marginNUm++;
  }

  if (marginNUm === 30) {
    reverse = true;
  }
  if (marginNUm === 0) {
    reverse = false;
  }
  body.style.margin = marginNUm + "px";
}

var mojInterval = setInterval(frame,2000);
//clearInterval(mojInterval);

//var mojTimeout = setTimeout(function (){
//  clearInterval(mojInterval);
//}, 5000);

//clearTimeout(mojTimeout);
