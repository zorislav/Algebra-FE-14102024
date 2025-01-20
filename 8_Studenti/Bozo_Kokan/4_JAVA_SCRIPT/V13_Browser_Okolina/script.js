//- Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora

console.log("Sirina view porta: " + window.innerWidth);
console.log("Sirina prozora: " + window.outerWidth);
console.log("Sirina ekrana: " + screen.width);

console.log("Visina view porta: " + window.innerHeight);
console.log("Visina prozora: " + window.outerHeight);
console.log("Visina ekrana: " + screen.height);

//- Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

console.log("Ime domene je: " + window.location.hostname);
// window.location.replace("http://www.google.com")

//- Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija

var rezultat = window.confirm("Potvrdite cookie?");
console.log(rezultat);

//- Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana

// window.setTimeout(funkcija,2000);
window.setTimeout(function()
{
    console.log("i am late");
}
,2000);

// Bonus 
if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
        console.log("Duzina: " + position.coords.longitude);
        console.log("Sirina: " + position.coords.latitude);
    })
}
else
{
    console.log("Geolocation disabled")
}
