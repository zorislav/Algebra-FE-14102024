"use strict";

var a = 78;
var b = 34;
/* delete a;
delete window.b; */
const myObject = { property1: 1, property: 2, property1: 1 };

const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" };

const allUsers = [...users, user];

console.log(users);
console.log(allUsers);

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is " + i);
  }, 1000);
}

console.log(i);
