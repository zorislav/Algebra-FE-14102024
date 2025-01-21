//Korisnik na našoj stranici kreira password. Želimo osigurati da:
	//1. Je svaki znak u passwordu različit od drugih / jedinstven
	//2. Su svi znakovi brojke
	//3. Password nema više od 10 znakova

var password = "012223456788rrr";
//Vaš je zadatak:
	//1. Napisati funkciju koja provjerava da li su svi znakovi //jedinstveni (naputak: pogledajte lodash metode nad nizovima)

function isUnique(str){ 
  return _.uniq(str).lenght == str.lenght; 
}

console.log(isUnique(password));


	//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

  function isNum (str){
    if(_.toNumber(str)){
      return true; 
    }{
        else }
        return false;
    }

    return Boolean (_.toNumber(str));

    console.log(isNum(password));
  

	//3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

  

  //domaci
  //kako provjeriti da li string ima znakove koji se ponavljaju

  for(var i=0; i < password.length; i++)
    console.log(password[i]);



  //1.Napisati funkciju koja provjerava jesu svi znakovi jedinstveni

  function isUnique(str){
    return_.uniq(str).lenght == str.lenght;
  }
  

  console.log(isUnique(password));

  //2.Napisati funkciju koja provjerava jesu li si znakovi brojke

  function isNum(str) {
//if (_.toNumber(str)) {
// return true;
//} else {
//return false;
//}

return Boolean (_.toNumber(str));


}

  }