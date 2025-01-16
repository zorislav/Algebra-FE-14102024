//1. Pročitajte više o JS BOM-u na https://www.w3schools.com/js/js_window.asp

//2. Dok ste još na toj stranici:

//- Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora

console.log("sirina viewporta:" + window.innerWidth);
console.log("sirina viewporta:" + window.outerWidth);
console.log("sirina viewporta:" + screen.width);

console.log("visina viewporta:" + window.innerHeight);
console.log("visina viewporta:" + window.outerHeight);
console.log("visina viewporta:" + screen.height);

//- Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

//console.log(window.location.hostname);
//window.location.replace("http://www.google.com");

//- Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija

var rezultat = window.confirm("potvrdite cookies");
console.log(rezultat);

//- Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana.

window.setTimeout(function () {
  console.log("I am late!");
}, 2000);

//bonus

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("duzina" + position.coords.longtude);
    console.log("sirina" + position.coords.longtude);
  });
} else {
  console.log("Geolocation disabled");
}
