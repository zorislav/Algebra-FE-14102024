//1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

var x = "John Doe";

function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto(x)();
var a = vratiNesto;

console.log(y);
console.log(z);
console.log(a);

//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.



 f();

(function (){


})();

var myF = (function (name) {
   var x = name;
   function f() {
      return x;
   }
   return f;
})(x);

console.log(myF);


//Bonus

var vanjskaFn = (function(){
var lokalnaVar = 10;
})();

//console.log(lokalnaVar);
console.log(vanjskaFn);
console.log(vanjskaFn.lokalnaVar);
console.log(vanjskaFn.get());
vanjskaFn.set(22);
console.log(vanjskaFn.get());


