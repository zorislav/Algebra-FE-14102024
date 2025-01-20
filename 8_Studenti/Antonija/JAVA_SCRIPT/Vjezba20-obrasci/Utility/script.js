// export
//import

import ispisiPozdrav from "./mylib.js";
import mojaFunkcija from "./mylib.js";
import {
  brojiDvaBroja as f,
  pomnoziDvaBroja,
  mojNiz,
  mojObj,
  Exercise,
} from "./mylib.js";

window.addEventListener("load", main);
document.addEventListener("DOMContentLoaded", main);

function main() {
  ispisiPozdrav();
  mojaFunkcija();

  var zbroj = f(3, 5);
  console.log("zbroj" + zbroj);

  var umnozak = zbrojiDvaBroja(3, 5);
  console.log("umnozak: " + umnozak);

  console.log(mojNiz);
  console.log(mojObj);

  console.log(Exercise.getTotalSteps());
  Exercise.walk();
  Exercise.walk();
}
