
var names = ['John', 'Jane', 'Bob',, 'Mike'];

//console.log(names);

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

 /* aletrnativa

 for(var name of names) {
    console.log(name);
 }
*/

// 2. Dodajte svoje ime na kraj niza.
names.push('Sanel');

console.log(names);

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (var i = 0; i <= names.length; i++) {
    console.log(names[i]);
    if (names[i] === 'Jane') break;
}

/*
for (var name of names) {
    console.log(name);
    if (name === 'Jane') break;
}
*/

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

for (var i = i; i < names.length; i++) {
    if (!names[i]) {
        names.splice(i, 1);
    }
}

console.log(names);