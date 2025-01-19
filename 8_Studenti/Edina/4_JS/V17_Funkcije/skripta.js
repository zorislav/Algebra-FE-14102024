// 1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

var x = "John Doe";

function vratiNesto(name) {
  var x = name;

  function f() {
    // funkcija f vraća name i onda u ovom dijelu return f se opet taj name vraća
    return x;
  }

  return f;
}
var y = vratiNesto("Jane Doe"); //  odgovor je funkcija
var z = vratiNesto()(); // odgovor je undefined zato što nema argumenta u funkciji
var j = vratiNesto("Jane Doe")(); // odgovor je Jane Doe jer se na ovom mjestu odmah funkcija izvršava, a mi smo joj dali kao argument name ''Jane Doe'' i prikazati će onda Jane Doe
var q = vratiNesto; // odgovor je funkcija, isto ko i ovo prvo u var y (ako je bez () pokaže se funkcija, a ako ima () ona se odmah izvršava na licu mjesta)
var o = vratiNesto(x)(); //odgovor je ''John Doe'', znaci na licu mjesta izvršava to što je definirano izvan funkcije (var x = ''John Doe'')

console.log(y);
console.log(z);
console.log(j);
console.log(q);
console.log(o);

//2. Od funkcije u prvom zadatku stvorite samopozivajuću
// anonimnu funkciju koja prima parametar (argument) "name". Kreirajte globanu varijablu
// koju ta funkcija koristi i zadajte joj vrijednost.

// function f() {} - ovo znaci da je ovdje funkcija samo DEFINIRANA i moramo ju pozvati negdje da ju izvršimo
// f()(); - ovdje je pozivamo, a ako dodamo još jednu zagradu onda ju i izvršimo odmah

// (function () {})(); ovo znaci da ce se funkcija ovdje izvršiti ODMAH (samopozivajuca anonimna funkcija)

var myF = (function (name) {
  //anonimnoj funkciji ne treba ime npr. f zato sto ju mi nigdje ne pozivamo kasnije
  // ona se sama poziva
  var x = name;
  function f() {
    return x;
  }

  return f;
})(x);

//stavili smo funkciju u varijablu mF samo zato da je mozemo na konzoli vidjeti

console.log(myF); //ovdje će se prikazati cijela funkcija
console.log(myF()); //ovdje će se prikazati IZVRŠENA funkcija, odnosno ''John Doe'' zbog dodane zagrade ()

//Bonus

//vanjskaFn vraća OBJEKT koji ima svojstvo get a to je funkcija koja  vraća lokalnuVar a ona je 10 i koji ima svojstvo set koji postavlja lokalnuVar na 22

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

console.log(vanjskaFn); //ovdje će se prikazati funkcija
console.log(vanjskaFn.get()); //ovdje će se funkcija izvršiti zbog (); i tu će biti ispis 10

vanjskaFn.set(22);
console.log(vanjskaFn.get()); //ovdje će biti ispis 22
