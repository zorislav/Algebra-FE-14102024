

console.log("Sirina viewporta: " + window.innerWidth);
console.log("Sirina prozora: " + window.outerWidth);
console.log("Sirina ekrana: " + screen.width);

console.log("Visina viewporta: " + window.innerHeight);
console.log("Visina prozora: " + window.outerHeight);
console.log("Visina ekrana: " + screen.height);


console.log(window.location.hostname);
//window.location.replace("http://www.google.com");



var rezultat = window.confirm("Potvrdite cookies?");
console.log(rezultat);



window.setTimeout(function () {
  console.log("I am late!");
}, 2000);

// Bonus

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Duzina: " + position.coords.longitude);
    console.log("Sirina: " + position.coords.latitude);
  });
} else {
  console.log("Geolocation disabled!");
}
