// 1.




// // 1.
// a = 78;
// var b = 034;
// delete a;
// delete window.b;
// myObject = {property1:1, property2:2, property1:1};

"use strict";

var a = 78;
var b = 34;
// delete a;
// delete window.b;
const myObject = {property1:1, property2:2, property1:1};


// // 2.
// const users = [
//   { name: 'Fabio', surname: 'Biondi' },
//   { name: 'Mario', surname: 'Rossi' },
// ];

// const user = { name: 'Lorenzo', surname: 'Verdi' };



// 2.
const users = [
    { name: 'Fabio', surname: 'Biondi' },
    { name: 'Mario', surname: 'Rossi' },
  ];
  
  const user = { name: 'Lorenzo', surname: 'Verdi' };

  const allUsers = [...users, user];

  console.log(allUsers);



// 3. Koju vrijednost vraćaju console.log izjave? zamijeni let s var!


// for (let i = 0; i < 10; i++) {
//  setTimeout(function() {
//    console.log('The number is ' + i);
//  }, 1000);
// }

// console.log(i);




for (var i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i);

// BONUS rest operator

function ispisiImena (...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
}

ispisiImena("Ivan", "Marija");