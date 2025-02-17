var names = ["John", "Jane", "Bob", , "Mike"];

//1.
names.forEach((element) => {
  console.log(element);
});

//2.
names.push("Jelena");
console.log(names);

//3.
for (element of names) {
  console.log(element);
  if (element === "Jane") break;
}

//4.
for (let i = 0; i <= names.length - 1; i++) {
  if (!names[i]) names.splice(i, 1);
}
console.log(names);
