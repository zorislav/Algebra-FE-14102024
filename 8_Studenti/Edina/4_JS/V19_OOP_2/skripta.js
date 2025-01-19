//1. Dodajte Dog funkciji varijablu "name" koja se
//  postavlja pri kreiranju objekta i označava ime psa.
// Defaultna vrijednost imena psa je "Rex".

//ovo je konstruktor funkcija preko koje radimo objekt

function Dog(name) {
  this.name = name || "Rex"; //ako nemamo ulazni parametar, ime će biti Rex, a ako imamo ulazni parametar, ime će biti ulazni parametar
  this.bark = function () {
    return "Wuf wuf";
  };
}

//2. Kreirajte objekt iz Dog (konstruktor) funkcije.

var dog = new Dog("Skippy");
var dog2 = new Dog();

console.log(dog.name); //tu će biti Skippy
console.log(dog2.name); // tu će biti Rex jer nemamo ulazni parametar
console.log(dog.bark()); //tu odmah izvršavamo fukciju koja vraća Wuf wuf

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.

Dog.prototype.getName = function () {
  //__proto__ je svojstvo objekta, a prototype je svojstvo konstruktor funkcije
  return this.name;
};

console.log(dog.getName());
console.log(dog2.getName());
