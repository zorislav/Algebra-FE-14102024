var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

// 1.
var trueFalse = !!"false" == !!"true";

console.log(trueFalse);

// !!{ truthy izraz } -> true
// !!{ falsy izraz } -> false

// 2.
console.log(q || x || y || z);

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

// Bonus

// void
console.log(void 1);

// typeof
console.log(typeof "Bok");

// instanceof
function Car(make, model) {
  this.tip = make;
  this.model = model;
}

const Auto  = new Car('Fiat', 'Punto')

console.log(Auto);
console.log(Auto instanceof Car)

//delete
const employee = {
  firstName: "John",
  lastName: "Doe",
};

console.log(employee);

delete employee.lastName;

console.log(employee);

