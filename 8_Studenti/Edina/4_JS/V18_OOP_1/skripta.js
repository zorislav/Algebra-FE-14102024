var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

var quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// 1.Nadite prototip objekta "character"
// (naputak: koristite metode globalnog Object objekta).
// Nadite prototip tog prototipa. Ispisite ih.

var Prototip1 = Object.getPrototypeOf(character); // ovako nalazimo prototip character objekta
console.log(Prototip1);

//svojstvo __proto__ GLAVNOG (GLOBALNOG) Objecta je null jer on nema objekt na osnovu čijeg prototipa je napravljen, a SVI ostali objekti su napravljeni na osnovu prototipa GLAVNOG Objecta

var Prototip2 = Object.getPrototypeOf(Prototip1);
console.log(Prototip2);

//2. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran)
// citat iz niz "quotes".

Prototip1.getQuote = function () {
  return Math.floor(Math.random() * quotes.length); // ovaj Math.random radi slučajan odabir između 0 i 1 a Math.floor te brojeve pretvara u cjelobrojne brojeve
};

console.log(Prototip1);
console.log(quotes[character.getQuote]);

//bonus - tu smo pristupili DIREKTNO PROTOTIPU OBJEKTA CHARACTER i nismo išli preko GLOBALNOG OBJEKTA

character.__proto__.getQuote2 = function () {
  return Math.floor(Math.random() * quotes.length);
};

console.log(Prototip1);
