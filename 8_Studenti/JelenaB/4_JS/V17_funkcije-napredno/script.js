// 1.
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();
console.log(y);
console.log(z);

//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name".
// Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

var global_for_f = "Jeca";

var result = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(global_for_f);
console.log(result);
console.log(result());

// Bonus
