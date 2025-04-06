// 1.Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex". 

function Dog(name){
    this.name = name || "Rex";
    this.bark = function() {
        return "Wuf wuf";
    }
}

// 2. Kreirajte objekt iz Dog funkcije.

var dog = new Dog("Skippy");
var dog2 = new Dog();

console.log(dog.name);
console.log(dog2.name);
console.log(dog.bark());


// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.

Dog.prototype.getName = function(){
    return this.name;
}

console.log(dog.getName());
console.log(dog2.getName());