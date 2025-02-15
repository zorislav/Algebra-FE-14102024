import ispisiPozdrav from "./utility/mylib.js"; //ovo je import za default export
import {
  zbrojiDvaBroja as f,
  pomnoziDvaBroja,
  mojNiz,
  mojObj,
  Excercise,
} from "./utility/mylib.js"; //u viticastu pisemo imena elemenata koje zelimo importirati

// window.addEventListener("load", main);
document.addEventListener("DOMContentLoaded", main);

function main() {
  ispisiPozdrav();

  var zbroj = f(4, 1);
  console.log("Rezultat zbrajanja: " + zbroj);

  var umnozak = pomnoziDvaBroja(4, 5);
  console.log("Rezultat množenja: " + umnozak);
}

console.log(mojNiz);
console.log(mojObj);
console.log(Excercise.getTotalSteps());

Excercise.walk();
Excercise.walk();
console.log(Excercise.getTotalSteps());

//ZADATAK
