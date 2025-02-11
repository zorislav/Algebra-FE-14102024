//1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

var firstName = "Ivan";
var lastName = "Horvat";

var fullName = firstName + " " + lastName;

console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
// var x = z === 2? y : 5;

var x = z === 2 ? y : 5; // da li je varijabla z jednaka 2, ako je onda u varijablu x pohranjujem y, ako nije onda broj 5

var x;
var z = 2;
var y = 1;

if (z === 2) {
  x = y;
} else {
  x = 5;
}
console.log(x);

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj: " + i + " je paran");
  } else {
    console.log("Broj: " + i + " je neparan");
  }
}
