var password = "012345678";

// dali su svi znakovi jedinstveni

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log(isUnique(password));

//napisi funkciju kjoja pregledava dali su sve brojke bez slova

function isNum(str) {
  if (_.toNumber(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(isNum(password));

function reduceLed(str) {
  if (str.length >= 10) {
    return _.take(str, 10);
  } else {
    return str;
  }
}

reduceLed(password);
