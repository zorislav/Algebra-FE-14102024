//ispisi visinu u konzovli i širinu

console.log("sirina viweporta: " + window.innerWidth);
console.log("sirina prozora: " + window.outerWidth);
console.log("sirina ekrana: " + screen.width);

console.log("visina viweporta: " + window.innerHeight);
console.log("visina prozora: " + window.outerHeight);
console.log("visina ekrana: " + screen.height);

//sazanaj ime lokalhost stranice i redirektaj se na google.com

console.log(window.location.hostname);
//window.location.replace("http://www.google.com");

var rezultat = window.confirm("da ili ne");
console.log(rezultat);

window.setTimeout(function(){
    console.log("i 'm late")

},2000);

//bonus

if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(function(position){
    console.log("Duzina:" + position.coords.longitude);
    console.log("Širina:" + position.coords.latitude);
});
    
}else{
    console.log("Geolacation disabled!")
}



