var text = ' Lorem ipsum dolor sit amet'

// spremite duljinu stringa u varijablu


var duljinaStringa = text.length;
console.log(duljinaStringa);

// izdvojite riješ sit u zasebnu varijablu.


var rijecSit = text.substr(18,3);
console.log(rijecSit);

var rijecSit2 = text.substring(18,3);
console.log(rijecSit2);

// zamijeni riječ 'amet' sa 'elit'

var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

// Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.

var dodaniText = text + ', consectetur adipiscing elit';
console.log(dodaniText);

// Konvertirajte sve riječi u orginalnom stringu u velika slova

var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

//Maknite počenu prazninu u stringu

var textBezPraznine = text.trim();
console.log(textBezPraznine);

// Nađite slovo na poziciji 13

var slovo = text.charAt(13);
console.log(slovo);
