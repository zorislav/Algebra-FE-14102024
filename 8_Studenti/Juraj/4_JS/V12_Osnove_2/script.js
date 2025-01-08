var password = "0123456781234";


//1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni 

function isUnique(str) {

    return _.uniq(str).length == str.length;
    // console.log(_.uniq(str));
}

console.log(isUnique(password));

for(var i=0; i < password.length; i++){
    console.log(password[i]);
}

//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str){
    if(_.toNumber(str)) {
        return true;
    } else {
        return false;
    }

    console.log(_.toNumber(str));
}

console.log(isNum(password));

// 3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

function reduceLength(str){
    if (str.length > 9) {
        return _.take(str, 10);
    }  else {
        return str;
        }

    //     tmpStr = _.take(str, 10);
    //     return tmpStr;
    
    // return str;
}
console.log(reduceLength(password));