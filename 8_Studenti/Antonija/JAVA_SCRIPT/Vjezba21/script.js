


// 1. Postavite use strict direktivuu na pocetak programa u scripts.js.ispravite geske koje javljaju.
// 1.
var a = 78;
var b = 034;
//delete a;
//delete window.b;
const myObject = {property1:1, property2:2, property1:1};

// 2. Dodajte polje user u users pomocu spread operatora. spremite rezultat  u novuu varijablu i ispisite rezultat.

const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };
const allUsers=[...users];
console.log(users);
console.log(allUsers);

let niz1 = [1,2,3];
let niz2 = niz1;
console.log(niz2);

niz2[3] = 5;
console.log(niz2);
console.log(niz1);


// 3. Koju vrijednost vracaju console.log izjave

for (let i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);


//console.log(i);
}

//bonus: rest operator

function ispisiImena(...args){
  console.log(args);
  console.log(args[0]);
  console.log(args[1]);

}

ispisiImena("Ivan", "Marija");