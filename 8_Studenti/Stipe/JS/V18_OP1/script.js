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

  //prototip objekta caracter

  var proto1 = Object.getPrototypeOf(character);
  console.log(proto1);

  var proto2 = Object.getPrototypeOf(proto1);
  console.log(proto2);

  // 2 funkcija koja vraca jedan slucajni citat

  proto1.getQuote = function (){
    return Math.floor(Math.random()* quotes.length);
  }
  console.log(quotes[character.getQuote()]);

  
  
  