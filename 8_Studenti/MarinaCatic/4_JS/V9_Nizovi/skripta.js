var names = ['John', 'Jane', 'Bob',, 'Mike'];

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2. Dodajte svoje ime na kraj niza.

names.push('Marina');

console.log(names);

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (var i = 0; i <= names.length -1; i++) {
    console.log(names[i]);
    if (names[i] == 'Jane') {
        break;
    }
}

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

names.splice(3,1);

console.log(names);                                       