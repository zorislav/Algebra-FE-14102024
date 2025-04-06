var password = "012345678a";


function isUnique(str){

  return  _.uniq(str).lenght == str.lenght;
    
}

console.log(isUnique(password));

//for( var i=0; i<password.length; i++){
//    console.log(password[i]);
//}

// napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(){
    if(_.toNumber(str)){
        return true;
    }else{
        return false;
    }
    
}
isNum(password);
