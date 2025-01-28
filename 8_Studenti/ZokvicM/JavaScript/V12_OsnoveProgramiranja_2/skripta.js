var password = "012345678aabbcc";

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log(isUnique(password));


function isNum(str){
 // if(_.toNumber(str)) {
 //   return true;
 // } else {
 //   return false;
 // }

  return Boolean(_.toNumber(str));
}

console.log(isNum(password));



function reduceLen(str){
  if (str.length >= 10) {
    return _.take(str, 10);
  } else {
    return str;
  }

}

console.log(reduceLen(str));