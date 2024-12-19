var words = ["quickest", "brown", "jummps", "over", "the", "lazy", "dog"];

function findLongestWord(niz) {
  var word = "";

  for (var i = 0; i < niz.length; i++) {
    if (word.length < niz[i].length) {
      word = niz[i];
    }
  }

  return word;
}

var najduzaRijec = findLongestWord(words);

console.log(najduzaRijec);

//Bonus

var novaFunckija = findLongestWord;

console.log(novaFunckija(words));

// forEach

var mojNiz = [1, 2, 3, 4];

function ispisi(element) {
  console.log(element);
}

mojNiz.forEach(ispisi);

//mojNiz.forEach(function (el) {
//  console.log(el);
// });

//map

function novi(br) {
  return br + 1;
}

var noviNiz = mojNiz.map(novi);

var noviNiz = mojNiz.map(function (x) {
  return x + 1;
});

console.log(noviNiz);
console.log(mojNiz);
