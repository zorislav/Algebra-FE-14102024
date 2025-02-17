//"use strict"

var a = 78;
var b = 34;
//delete a;
//delete window.b;
const myObject = {property1: 1, property2: 2, property1: 1,}

//2

const users = [
    { name: 'Fabio', surname: 'Biondi' },
    { name: 'Mario', surname: 'Rossi' },
  ];
  
  const user = { name: 'Lorenzo', surname: 'Verdi' };

  const allUsers = [...users, user];

  console.log(users);
  console.log(allUsers);

  let niz1 = [1,2,3];
  let niz2 = niz1;

  console.log(niz2);
  niz2[3]=5;
  console.log(niz2);
  console.log(niz1);

  //3

  // 3.
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log('The number is ' + i);
    }, 1000);
   }
   
   // i undefined ako je u for petlji let
   //console.log(i);

   // bonus rest operator

   function ispisiImena(...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);

   }

   ispisiImena("ivan","Marija");

