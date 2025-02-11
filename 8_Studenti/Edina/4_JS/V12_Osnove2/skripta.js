// Korisnik na našoj stranici kreira password. Želimo osigurati da:
// 	1. Je svaki znak u passwordu različit od drugih / jedinstven
// 	2. Su svi znakovi brojke
// 	3. Password nema više od 10 znakova

var password = "12345678";

// 	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni

function isUnique(str) {
  var istinaIliLaz = _.uniq(str).length == str.length; //str.length je duzina passworda
  // i s ovim uspoređujemo je li duzina unikatnih znakova ista ko duzina passworda i to pospremamo u var istinaIliLaz
  return istinaIliLaz;
}
console.log(isUnique(password));

//može se i ovako pisati, to je bolji način pisanja;

// function isUnique(str) {
//   return _uniq(str).length == str.length;
//   }

//DZ:
for (var i = 0; i < password.length; i++) {
  if (_.uniq(password).length == password.length) {
    console.log("True");
  } else {
    console.log("False");
  }
}

// 	2. Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}
console.log(isNum(password));

// //DZ (ovo nije ispravno)
// for (var num in password) {
//   if (password.propertyIsEnumerable(num)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// for (i = 0; i <= password; i++) {
//   if (password[i] % 1 == 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// 	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

function reduceLen(str) {
  if (str.length > 10) {
    return _.take(str, 10);
  } else {
    return str;
  }
}
console.log(reduceLen(password));

//može i ovako, ovdje smo dali ovom _.take(str,10) ime tmpStr i kasnije ga vratili s return

// function reduceLen(str) {
//   if (str.length > 9) {
//     tmpStr = _.take(str, 10);
//     return tmpStr;
//   }
//   return str;
// }

// console.log(reduceLen(password));
