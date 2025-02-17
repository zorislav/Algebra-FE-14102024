//1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?
var x = "John Doe";
function vratiNesto(name) {
  var x = name; //pohranjivanje globalne varijable u lokalnu
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

console.log(y);
console.log(z);
//odgovor: u varijabli y je funkcija, u z je undefined jer nema argumenata u pozivanju funkcije

//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name".
// Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

//(function () {})(); --> uzorak samopozivajuce anonimne funkcije (kostur)

var myF = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x);

console.log(myF());

// BONUS:

var vanjskaFn = (function () {
  var lokalnaVar = 10;
  return {
    get: function () {
      return lokalnaVar;
    },
    set: function (novaVrijednost) {
      lokalnaVar = novaVrijednost;
    },
  };
})();

console.log(vanjskaFn);
console.log(vanjskaFn.lokalnaVar);
console.log(vanjskaFn.get());
vanjskaFn.set(22);
console.log(vanjskaFn.get());
