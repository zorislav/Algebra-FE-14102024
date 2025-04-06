
// 1. Postavite "use strict" direktivu na početak programa u skripta.js. 
// Ispravite sve greške koje vidite.
var a = 78;
var b = 34;
//delete a;
//delete window.b;
const myObject = {property1:1, property2:2, property1:1};

// 2. Dodajte polje "user" u "users" pomoću spread operatora. 
// Spremite rezultat u novu varijablu i spremite rezultat.
const users = [
    { name: 'Fabio', surname: 'Biondi' },
    { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [...users, user];

console.log(users);
console.log(allUsers);

// 3. Koju vrijednost vraćaju console.log izjave? 
// Probajte zamijeniti let sa var.
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log('The number is ' + i);
    }, 1000);
}

//console.log(i);

// Bonus: rest operator

function ispisiImena(...args) {
    console.log(args[0]);
    console.log(args[1]);
}

ispisiImena("Ivan", "Marija");
