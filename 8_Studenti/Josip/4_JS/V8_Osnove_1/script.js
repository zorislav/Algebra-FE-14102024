var firstName = "Ivan";
var lastName = "Horvat";

var fullName = firstName + " " + lastName;

console.log(fullName);

/* 2. na 3 razlicite operacije */

var x = z === 2 ? y : 5;

var x;
var z = 1;

if (z === 2) {
  x = y;
} else {
  x = 5;
}
console.log(x);

/* 3. petlja */

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj: " + i + " je paran");
  } else {
    console.log("Broj: " + i + " je ne paran");
  }
}
