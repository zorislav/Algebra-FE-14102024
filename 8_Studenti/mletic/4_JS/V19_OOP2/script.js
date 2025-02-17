// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa.
// Defaultna vrijednost imena psa je "Rex".

function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "wuf wuf";
  };
}

// 2. Kreirajte objekt iz Dog funkcije.

var dog = new Dog("Astor");
var dog2 = new Dog();

console.log(dog.bark());
console.log(dog.name);

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.

Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog.getName());
console.log(dog2.getName());
