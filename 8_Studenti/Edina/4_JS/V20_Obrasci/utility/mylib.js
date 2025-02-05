//koristimo EXPORT ako zelimo ovu funkciju dati na raspolaganje bilo di je to potrebno u drugom js
//po jednoj datoteci moze biti SAMO JEDAN takav defaultni export

export default function ispisiPozdrav() {
  console.log("Hello world!");
}

//   export default ispisiPozdrav; - možemo i ovako pisati ali 1. nacin je bolji

//exporti koji nisu defaultni, mozemo ih imati koliko god zelimo,
// a zovu se imenovani exporti (NAMED EXPORT) i tu moramo tocno funkciju napisati
// i kasnije ju tocno imenom pozvati:

export function zbrojiDvaBroja(a, b) {
  return a + b;
}

export function pomnoziDvaBroja(a, b) {
  return a * b;
}

export const mojNiz = [1, 2, 3, 4];

export const mojObj = {
  ime: "Edina",
  prezime: "Kolaković",
};

//1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka,
//  a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().

export var Exercise = (function () {
  var steps = 5;
  function increaseSteps() {
    steps++;
  }
  return {
    getTotalSteps: function () {
      return steps;
    },
    walk: function () {
      //ova funkcija izvršava funkciju increaseSteps na ovom mjestu
      increaseSteps();
    },
  };
})();
