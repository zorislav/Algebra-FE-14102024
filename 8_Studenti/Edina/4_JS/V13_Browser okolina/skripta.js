// 	- Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora

console.log("Širina viewporta: " + window.innerWidth); //ovo je širina prikaznog područja
console.log("Širina prozora: " + window.outerWidth); //ovo je širina cijelog prozora ukupno
console.log("Širina ekrana: " + screen.width); //ovo je širina cijelog ekrana ukupno - isto ko i prozor

console.log("Visina viewporta: " + window.innerHeight); //ovo je visina prikaznog područja
console.log("Visina prozora: " + window.outerHeight); //ovo je visina cijelog prozora ukupno
console.log("Visina ekrana: " + screen.height); //ovo je visina cijelog ekrana ukupno - isto ko i prozor

// 	- Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

console.log(window.location.hostname);
//window.location.replace("http://www.google.com"); ovo je da redirektamo na google

// 	- Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija

var prozorcic = window.confirm("Potvrdite cookies");
console.log(prozorcic);

// 	- Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana

window.setTimeout(function () {
  console.log("I am late.");
}, 2000);

// ovo 2000 je 2 sekunde

//Bonus

if (navigator.geolocation) {
  //znaci da je geolokacija ukljucena

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Dužina: " + position.coords.longitude);
    console.log("Širina: " + position.coords.latitude);
  });
} else {
  console.log("Geolocation disabled");
}
