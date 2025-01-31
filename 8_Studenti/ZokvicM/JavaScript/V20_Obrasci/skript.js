import mojaFunkcija from "./utility/mylib.js";
import ispisiPozdrav from "./utility/mylib.js";
import {
  zbrojiDvaBroja as f,
  pomnožiDvaBroja,
  mojNiz,
  mojObjekt,
  Exercise,
} from "./utility/mylib.js";

//window.addEventListener("load", main);
document.addEventListener("DOMContentLoaded", main);

function main() {
  mojaFunkcija();
  ispisiPozdrav();

  var zbroj = f(3, 5);
  console.log("Zbroj: " + zbroj);

  var umnožak = pomnožiDvaBroja(3, 5);
  console.log("Umnožak: " + umnožak);

  console.log(mojNiz);
  console.log(mojObjekt);

  console.log(Exercise.getTotalSteps());
  Exercise.walk();
  Exercise.walk();
  Exercise.walk();
  console.log(Exercise.getTotalSteps());
}
