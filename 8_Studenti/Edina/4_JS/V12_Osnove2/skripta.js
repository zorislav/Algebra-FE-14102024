// Korisnik na našoj stranici kreira password. Želimo osigurati da:
// 	1. Je svaki znak u passwordu različit od drugih / jedinstven
// 	2. Su svi znakovi brojke
// 	3. Password nema više od 10 znakova

var password = "012345678aa";

// 	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log(isUnique(password));

// 	2. Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

// 	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10
function reduceLen(str) {
  if (str.length > 9) {
    tmpStr = _.take(str, 10);
    return tmpStr;
  }
  return str;
}

console.log(isUnique(pass));
console.log(isNum(pass));
console.log(reduceLen(pass));

// 01:51 predavanja
