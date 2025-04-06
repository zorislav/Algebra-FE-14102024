var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

var protoripObjekta = Object.getPrototypeOf(character);
console.log(protoripObjekta);
var protoripPrototipaObjekta = Object.getPrototypeOf(protoripObjekta);
console.log(protoripPrototipaObjekta);

function randomQuote(list) {
  return list[Math.floor(Math.random() * list.length)];
}
console.log(randomQuote(quotes));
protoripObjekta.getQuote = randomQuote;

console.log(protoripObjekta);

character.getQuote2 = function () {
  return list[Math.floor(Math.random() * quotes.length)];
};
