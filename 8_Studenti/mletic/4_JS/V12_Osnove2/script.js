var password = "01234";

//1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log(isUnique(password));

//DZ napraviti alternativu!

//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str) {
  //   if (_.toNumber(str)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return Boolean(_.toNumber(str));
}

// console.log(isNum(password));

function isNum(str) {
  for (var i = 0; i < str.length; i++) {
    if (isNaN(+str[i])) {
      return false;
    }
  }
  return true;
}

console.log(isNum(password));

//3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

// function reduceLen(str) {
//   if (str.length >= 10) {
//     return _.take(str, 10);
//   } else {
//     return str;
//   }

//   console.log(_.take(str, 10));
// }

// console.log(reduceLen(password));

function reduceString(str) {
  for (var i = 0; i <= 9; i++) {
    console.log(str[i]);
  }
}

reduceString(password);
