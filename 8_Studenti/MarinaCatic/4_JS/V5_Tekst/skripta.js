var text = ' Lorem ipsum dolor sit amet';

// 1. Spremite duljinu stringa u varijablu

var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2. Izdvojite rijec "sit" u zasebnu varijablu

var rijecSit = text.substr(19,3);
console.log(rijecSit);

var rijecSit2 = text.substring(19,22);
console.log(rijecSit2);

// 3. Zamijenite rijec "amet" sa rijeci "sit"

var noviTekst = text.replace("amet","elit");
console.log(noviTekst);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom "consectetur adipiscin elit", sa zareom izmedju

var dodaniTekst = text + ',' + ' consectetur adipiscin elit';
console.log(dodaniTekst);

// 5. Konvertirajte sve rijeci u originalnom stringu u velika slova

var velikaSlova = text.toUpperCase();
console.log(velikaSlova);

// 6. Maknite pocetnu prazninu u stringu

var bezPraznine = text.trim();
console.log(bezPraznine);

// 7. Nadjite slovo na poziciji 12

var slovo = text.charAt(12);
console.log(slovo);