var password = '012345678999';

// Napisati funkciju koja provjerava da li su svi znakovi jednistveni

function isUnique(str) {
    return _.uniq(str).length == str.length;
}

console.log(isUnique(password));

// Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str) {
    return Boolean(_.toNumber(str));
}

console.log(isNum(password));

// Napisati funkciju koja uzima password i skracuje ju na 10 znakova, ako je broj znakova veci od 10

function reduceLen(str) {
    if (str.length >= 10) {
        return _.take(str, 10);
    } else {
        return str;
    }
}

console.log(reduceLen(password));