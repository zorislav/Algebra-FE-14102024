var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

var quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

//1. Pratite kod u scripts.js.

//2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). 
// Nadite prototip tog prototipa. Ispisite ih.

var prototip = Object.getPrototypeOf(character);
console.log(prototip);

var prototip2 = Object.getPrototypeOf(prototip);
console.log(prototip2);

//3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".

prototip.getQuote = function ()
{
	return Math.floor(Math.random() * quotes.length);
}

console.log(quotes[character.getQuote()]);

// character.__proto__.getQuote2 = function ()
// {
// 	return Math.floor(Math.random() * quotes.length);
// }

// console.log(prototip);