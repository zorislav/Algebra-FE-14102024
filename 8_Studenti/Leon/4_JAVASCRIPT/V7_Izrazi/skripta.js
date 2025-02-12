//1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
var broj = 2;

while (broj < 20) {
  broj++;
  if (broj % 9 == 0) {
    continue;
  }
  console.log(broj);
}

//alternativa

// for (let broj = 3; broj <= 20; broj++) {
//   if (broj % 9 !== 0) console.log(broj);
// }

// //2. Koja je vrijednost isprintana u konzoli?
var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

//odgovor je 16

// Bonus
const niz = ["a", "b", "c", "d"];

for (let i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}
// for...of
for (const element of niz) {
  console.log(element);
}

// for..in
const objekt = { a: 1, b: 2, c: 3 };
for (const svojstvo in objekt) {
  console.log(svojstvo); //s tim ispisujemo a, b, c (A AKO ŽELIMO VRIJEDNOSTI ISPISATI PIŠEMO console.log (objekt[svojstvo])
  console.log(svojstvo + objekt[svojstvo]); //to je ako želimo ispisati i vrijednosti i a,b,c
}