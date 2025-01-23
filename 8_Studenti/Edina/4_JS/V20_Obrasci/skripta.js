import ispisiPozdrav from "./utility/mylib.js";
import mojaFunkcija from "./utility/mylib.js";

ispisiPozdrav();
mojaFunkcija(); //budući da se radi o defaultnom exportu, kod importa mi znamo što importiramo,
// dakle uvijek je ova funkcija ispisiPozdrav i zato tu pozivamo MojaFunkcija a
// ne ispisiPozdrav (iako mozemo pisati i ispisiPozdrav)

import {
  zbrojiDvaBroja as f, // ovo as f nam omogućuje da promijenimo ime funkcije
  pomnoziDvaBroja,
  mojNiz,
  mojObj,
  Exercise,
} from "./utility/mylib.js";

var zbroj = f(3, 5);
console.log("Zbroj: " + zbroj);

var umnozak = pomnoziDvaBroja(2, 5);
console.log("Umnožak: " + umnozak);

console.log(mojNiz);
console.log(mojObj);
console.log(Exercise.getTotalSteps());
Exercise.walk();
Exercise.walk();
console.log(Exercise.getTotalSteps());

//BONUS (Ovo možemo sve izvršiti i pomoću EventListenera na 2 načina - pomoću window krovnog objekta ili document objekta)

// kada se dogodi event "load"(kad se naša skripta izvrši), funkcija main koju smo definirali će se izvršiti
//  a to znači da će se event desiti kada bude parsiran cijeli dokument (kad se naša skripta izvrši)
// i ako bude ukljucivao neke vanjske elemente (kada su dobavljeni svi dodatni elementi, npr image)

//znači kad se sve skupa izvrši i dobavi će se izvršiti ovaj event

// window.addEventListener("load", main);

// function main() {
//
//   ispisiPozdrav();
//   mojaFunkcija();
//   var zbroj = f(3, 5);
//   console.log("Zbroj: " + zbroj);

//   var umnozak = pomnoziDvaBroja(2, 5);
//   console.log("Umnožak: " + umnozak);

//   console.log(mojNiz);
//   console.log(mojObj);
//   console.log(Exercise.getTotalSteps());
//   Exercise.walk();
//   Exercise.walk();
//   console.log(Exercise.getTotalSteps());
// }

// document.addEventListener("DOMContentLoaded", main);

// funkcija main će se izvršiti kada se dogodi event "DOMContentLoaded" a on će se dogoditi kada
//browser parsira cijeli dokument i kreira DOCUMENT OBJECT MODEL i svi elementi su u memoriji
//ali se može desiti da neki dodatni element još nije stigao (npr image) zato što
// se ta komunikacija odvija ASINKRONO

//mi možemo koristiti ili jedan ili drugi način ovisno o tome što nama treba.

// DODATNO OBJAŠNJENJE : window označava prozor gdje se izvršava sve ovo, a document označava BAŠ TAJ HTML dokument koji koristimo
