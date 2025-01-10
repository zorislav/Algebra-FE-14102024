var password = "01234567";

// 1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni.

function isUnique(str){

    return _.uniq(str).length == str.length

}

console.log(isUnique(password));

// 2. Napisati funkciju koja provjerava da li su svi znakovi brojke.

function isNum(str){
    // if(_.toNumber(str)) {
    // return true;
    // } else {
    //     return false;
    // }
    return Boolean(_.toNumber(str));
}

console.log(isNum(password));

// 3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10.

function reduceLen(str){
    if(str.length > 9){
        return _.take(str, 10);
    } else {
        return str;
    }
}

console.log(reduceLen(password));