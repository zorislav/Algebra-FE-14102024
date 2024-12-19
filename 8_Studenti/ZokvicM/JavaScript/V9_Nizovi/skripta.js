var names = ["John", "Jane", "Bob", , "Mike"];

//console.log(names)

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//for (var name of names) {
//  console.log(name);
// }

names.push("Mihovil");

console.log(names);

for (var i = 0; i <= names.length - 1; i++) {
  console.log(names[i]);
  if (names[i] === "Jane") {
    break;
  }
}

for (var name of names) {
  console.log(name);
  if (name === "Jane") break;
}

for (var i = 0; i < names.length; i++) {
  if (!names[i]) {
    names.splice(i, 1);
  }
}

console.log(names);
