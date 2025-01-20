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

// window.addEventListener("load", main); //definiramo funkciju kad se desi ovaj event load na window objektu, a to znači da će se event desiti kada bude parsiran cijeli dokument i ako bude ukljucivao neki vanjski element (kada su dobavljeni svi dodatni elementi, npr image)
// document.addEventListener("DOMContentLoaded", main); // ovo preslusati opet

// function main() {
//
//   ispisiPozdrav();
//   mojaFunkcija();
//   var zbroj = f(3, 5);
//   console.log("Zbroj: " + zbroj);

//   var umnozak = pomnoziDvaBroja(2, 5);
//   console.log("Umnožak: " + umnozak);
// }
