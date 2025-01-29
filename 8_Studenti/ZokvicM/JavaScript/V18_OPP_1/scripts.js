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

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);



proto1.getQuote = function (){
		return Math.floor(Math.random() * quotes.length);
	}

console.log(quotes[character.getQuote()]);