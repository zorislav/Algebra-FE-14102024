//1 Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora

console.log("Visina vewporta: " + window.innerHeight);
console.log("Širina vewporta: " + window.innerWidth);
console.log("Visina prozora: " + window.outerHeight);
console.log("Širina prozora: " + window.outerWidth);
console.log("Visina ekrana: " + screen.height);
console.log("Širina ekrana: " + screen.width);

//2. Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

console.log(window.location.hostname);
//window.location.replace("http://www.google.com");

//3. Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija

var rezultat = window.confirm("Potvrdite cookies?");
console.log(rezultat);

//4. Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana

window.setTimeout(function(){
    console.log("I am late!")
}, 2000);

//Bonus

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log("Dužina: " + position.coords.longitude);
        console.log("Širina: " + position.coords.latitude);
    });
} else {
    console.log("Geolocation disabled!")
}

