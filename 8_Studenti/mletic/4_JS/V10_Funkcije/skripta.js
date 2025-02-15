var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

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

var novaFunkcija = findLongestWord;

console.log(novaFunkcija(words));

//BONUS:

//forEach

var mojNiz = [1, 2, 3, 4];

function ispisi(element) {
  //deklariranje funkcije koja je iskoristena kao argument forEacha koji slijedi
  console.log(element);
}

mojNiz.forEach(ispisi);

mojNiz.forEach(function (el) {
  //ovo je kao i ovo gore, samo se vise koristi ovako u stvarnom zivotu,
  console.log(el);
  // dakle funkcija se deklarira unutar argumenta, a ne prije, i nema imena (anonimna funkcija)
});

//map

function novi(br) {
  return br * 10;
}

var noviNiz = mojNiz.map(function (x) {
  return x + 1;
});

console.log(noviNiz);
console.log(mojNiz);

// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
// 2. Vratite tu riječ iz funkcije i spremite u varijablu.
// 3. Ispišite varijablu u konzoli.
