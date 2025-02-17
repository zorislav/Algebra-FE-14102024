var names = ["John", "Jane", "Bob", , "Mike"];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.push("Josip");

console.log(names);

for (var i = 0; i <= names.lenght - 1; i++) {
  console.log(names[i]);
  if (names[i] === "Jane") {
    break;
  }
}

names.splice();
