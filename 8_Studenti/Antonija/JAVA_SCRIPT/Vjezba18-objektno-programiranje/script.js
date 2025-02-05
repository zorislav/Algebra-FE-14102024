var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

//1.Nadjite prototip objekta "character"
//Nadjite prototip tog prototipa i ispisite ih.

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

//2.dodajte prototipu objakta "character " funkciju koja vraca jedan(slucajno odabran) citat iz niz "quotes".


proto1.getQuote = function (){

  return Math.floor(Math.random() * quotes.length);
}

console.log(quotes[character.getQuote()]);
