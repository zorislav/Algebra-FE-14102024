console.log("Sirina viewporta: " + window.innerWidth);
console.log("Sirina prozora: " + window.outerWidth);
console.log("Sirina ekrana: " + screen.width);

console.log("Sirina viewporta: " + window.innerHeight);
console.log("Sirina prozora: " + window.outerHeight);
console.log("Sirina ekrana: " + screen.height);

console.log(window.location.hostname);
/* window.location.replace("google.com") */

var rezultat = window.confirm("Potvrdite cookies?");
console.log(rezultat);

window.setTimeout(function () {
  console.log("I am late");
}, 2000);

/* bonusi */
