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

const allUsers = [...users];

console.log(users);
