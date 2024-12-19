var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

// 1.
var trueFalse = !!"false" == !!"true"; //nije bitno sto pise, nego ima li string vrijednost ili ne, ako string ima vrijednost onda je truthy
console.log(trueFalse);
//!!{truthy izraz} -> logicki true
//!!{falsy izraz} -> logicki false

// 2.
console.log(q || x || y || z);
// ispisuje prvu vrijednost koja nije false, a to je x

// 3.
var num = 6;
num--;
console.log(num);

var x = 4;
var z = x++;
console.log(x);
console.log(z);

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
let formattedPrice = totalPrice.toFixed(2);

console.log("Total:", formattedPrice);

//Bonus dio

//void
console.log(void 1);

//typeof
console.log(typeof "bok");

//instanceof
function Car(make, model) {
  this.tip = make;
  this.model = model;
} //ovo je kreiranje objekta preko class odnosno funkcije constructor

const vozilo = new Car("Fiat", "Punto"); //ovo je pozivanje objekta putem kljucne rijeci new
console.log(vozilo);
console.log(vozilo instanceof Car);

//delete

const employee = {
  firstName: "John",
  lastName: "Doe",
}; //ovo je direktno kreiranje objekta (firstname i lastname su svojstva objekta)

console.log(employee);
delete employee.lastName;
console.log(employee);
