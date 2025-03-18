// 1. Postavite use strict direktivu na pocetak programa u script.js. Ispravite sve greške koje

"use strict";
var a = 78;
var b = 34;
// delete a;
// delete window.b;
const myObject = { property1: 1, property2: 2, property1: 1 };

//2. Dodajte polje "user" u "users" pomocu spread opreatora. Spremite rezultat u novi varijablu i ispisite rezultat.
const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" };

const allUsers = [...users, user];

console.log(allUsers);

// let niz1 = [1, 2, 3];

// let niz2 = niz1;

// console.log(niz2);

// niz2[3] = 5;

// console.log(niz2);
// console.log(niz1);

//3. KOju vrijednost vracaju console.log izjave? Probajte zamijeniti let sa var

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is " + i);
  }, 1000);
}

console.log(i);

//BONUS:

//rest operator

function ispisiImena(...args) {
  console.log(args[0]);
  console.log(args[1]);
}

ispisiImena("Ivan", "Marija");
