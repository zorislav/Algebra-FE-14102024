// Primjer
// import ispisiPozdrav from "./utility/mylib.js";
// import mojaFunkcija from "./utility/mylib.js";
// import { zbrojiDvaBroja as f, pomnoziDvaBroja, mojNiz, mojObj } from "./utility/mylib.js"; // as "ime funckije koju zelimo u ovoj datoteci"

// // window.addEventListener("load", main);
// document.addEventListener("DOMContentLoaded", main);

// function main (){
//     ispisiPozdrav();
//     mojaFunkcija();
    
//     var zbroj = f(4,9);
//     console.log (zbroj);
    
//     var umnozak = pomnoziDvaBroja(4,9);
//     console.log (umnozak);

//     console.log(mojNiz);
//     console.log(mojObj);
// }


import { Exercise } from "./utility/mylib.js";
document.addEventListener("DOMContentLoaded", main);

function main (){
    console.log(Exercise.getTotalSteps());
    Exercise.Walk();
    Exercise.Walk();
    console.log(Exercise.getTotalSteps());
}
