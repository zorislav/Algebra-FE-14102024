// 1. Postavite "use strict" direktivu na početak programa i ispravite sve greške koje se pokažu.

"use strict";

var a = 78;
var b = 34;
// delete a;
// delete window.b;
const myObject = { property1: 1, property2: 2, property1: 1 };

// 2. Dodajte polje "user" u "users" pomoću spread operatora.
// Spremite u novu varijablu i ispišite rezultat.

const users = [
  { name: "Fabio", surname: "Biondi" }, //ovo je polje users sa 2 objekta
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" }; //ovo je objekt sam za sebe

const allUsers = [...users, user]; //putem spread elementa smo rastavili polja i onda smo dodali user objekt (novo polje)
console.log(users);
console.log(allUsers);

//Bonus
let niz1 = [1, 2, 3];
let niz2 = niz1; //ovo znaci da su i niz1 i niz2 na istoj adresi, dvije varijable koje pokazuju na isto mjesto
console.log(niz2);
niz2[3] = 5;
console.log(niz2);
console.log(niz1);

// // 3. Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is " + i);
  }, 1000);
  // console.log(i); mozemo i ovdje staviti console.log(i); da nam ne izbacuje Error
}
// console.log(i);

//Bonus - rest operator (obrnuto od spread operatora)

function ispisiImena(...args) {
  console.log(args);
  console.log(args[0]);
  console.log(args[1]);
}
ispisiImena("Ivan", "Marija");
