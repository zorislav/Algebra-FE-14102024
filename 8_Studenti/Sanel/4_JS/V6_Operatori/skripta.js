var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	q = false;
	
// 1. 
var trueFalse = !!"false" == !!"true";
console.log(trueFalse);

// 2. 
console.log(q || x || y || z);

// 3. 
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;    
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
let formattedPrice = totalPrice.toFixed(2);

console.log("Total:", formattedPrice);

//Bonus 

// void - koristi se za definiranje "undefined" vrijednosti

console.log(void 1);

// typeof - vraća tip neke vrijednosti

console.log(typeof "Bok");

// instanceof - testira da li je neki objekt instanca neke klase 

class Car {
    constructor(make, model) {
        this.tip = make;
        this.model = model;
    }
}

const vozilo = new Car('Fiat', 'Punto');

console.log(vozilo);
console.log(vozilo instanceof Car);

// delete - briše odabrano svojstvo objekta

const employee = {
    firstName: "John",
    lastName: "Doe"
}; //definiramo objekt "employee"

console.log(employee);

delete employee.lastName;

console.log(employee);