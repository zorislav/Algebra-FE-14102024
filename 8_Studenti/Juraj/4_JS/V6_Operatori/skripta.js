var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	q = false;
	
// 1. 
var trueFalse = !!"false" == !!"true";

//ispisuje se true

// 2. 
console.log(q || x || y || z);

// ispisuje prvu true vrijednost 

// 3. 
var num = 6;
num--;
console.log(num);

// num je 5

// 4.
const price = 26.5;    
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
let formattedPrice = totalPrice.toFixed(2);

console.log("Total:", formattedPrice);


//bonus dio

console.log(void 1);

//typeof

console.log(typeof "Bok");

//instanceof

function Car (make, model) {
this.tip = make;
this.model = model;

}

const.vozilo = new Car('Fiat', 'Punto');

console.log(vozilo);

console.log(vozilo instanceof Car);