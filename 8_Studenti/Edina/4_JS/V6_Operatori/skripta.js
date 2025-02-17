var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

// 1.
var trueFalse = !!"false" == !!"true";
//ispis će biti true
// !!{truty izraz} -> true
// !!{falsy izraz} -> false

// 2.
console.log(q || x || y || z);
//ispis će biti Lorem ipsum jer ispisuje prvu vrijednost koja nije false

// 3.
var num = 6;
num--;
console.log(num);
//ispis će biti 5

var x = 4;
var z = ++x;

console.log(z);
//ispis će biti 5 , varijablu x uvećamo za 1 i tu vrijednost dodijelimo varijabli z
//a ako napišemo x++ onda uzmemo varijablu x, dodijelimo je varijabli z i nakon operacije dodjeljivanja uvećavamo x za 1 i onda je z = 4

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
let formattedPrice = totalPrice.toFixed(2);

console.log("Total:", totalPrice);

//const je nepromjenjiva konstanta, a let je nešto kao var ali vrijedi u nekom bloku

// Bonus (OPERATORI)

// void
console.log(void 1); //biti će undefined

//typeof
console.log(typeof "Bok"); // s ovim gledamo kojeg je tipa vrijednost, a to je string u ovom slucaju

//instanceof (testira dali je neki objekt instanca neke klase (dali je nastao na osnovu te klase) i rezultat će biti true)
class Car {
  constructor(make, model) {
    this.tip = make;
    this.model = model; //konstruktor funkcija koji definira kako bi objekt trebao izgledati
  }
}

const vozilo = new Car("Fiat", "Punto");

console.log(vozilo);
console.log(vozilo instanceof Car);

//delete (briše neko svojstvo objekta)
const employee = {
  //time smo definirali objekt employee
  firstName: "John",
  lastName: "Doe",
};
console.log(employee);

delete employee.lastName;

console.log(employee);
