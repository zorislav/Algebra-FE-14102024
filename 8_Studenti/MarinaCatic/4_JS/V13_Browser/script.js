// 1. Ispisite u konzoli visinu i sirinu trenutno otvorenog browser prozora

console.log("Sirina viewporta: " + window.innerWidth);
console.log("Sirina prozora: " + window.outerWidth);
console.log("Sirina ekrana: " + screen.width);

console.log("Visina viewporta: " + window.innerHeight);
console.log("Visina prozora: " + window.outerHeight);
console.log("Visina ekrana: " + screen.height);

// 2. Saznajte ime domene stranice (hostname) i redirektajte na google.com

console.log(window.location.hostname);
//window.location.replace("http://www.google.com");

// 3. Napisite naredbu koja otvara komfirmacijski prozor u browseru vezan za politiku cookiesa

var rezultat = window.confirm("Potvrdite cookies?");
console.log(rezultat);