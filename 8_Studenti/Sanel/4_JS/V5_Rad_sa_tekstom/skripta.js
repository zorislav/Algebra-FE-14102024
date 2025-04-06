var text = ' Lorem ipsum dolor sit amet';

// 1. Spremite duljinu stringa u varijablu 

var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2. Izdvojite riječ 'sit u zasebnu varijablu

var rijecSit = text.substr(19, 3);
console.log(rijecSit);

var rijecSit2 = text.substring(19, 22);
console.log(rijecSit2);


// 3. Zamijenite riječ 'amet' sa riječi 'elit'

var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu

var dodaniText = text + ', ' + 'consectetur adipiscing elit'
console.log(dodaniText);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova

var velikiText = text.toUpperCase();
console.log(velikiText);


// 6. Maknite poletnu prazninu u stringu

var textBezPraznine = text.trim();
console.log(textBezPraznine);

// 7. Nadjite slovo na poziciji 12

var slovo = text.charAt(12);
console.log(slovo); 