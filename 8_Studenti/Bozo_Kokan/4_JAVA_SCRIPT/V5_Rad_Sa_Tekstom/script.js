var text = ' Lorem ipsum dolor sit amet';

// 1. Spremanje duljine stringa u varijablu.
var length = text.length;
console.log(length);

// 2. Izdvojite rijec "sit" u zasebnu varijablu
var rijecSit = text.substr(19,3);
console.log(rijecSit);

var rijecSit2 = text.substring(19,22);
console.log(rijecSit2);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.
console.log(text);
var noviText = text.replace("amet", "elit");
console.log(noviText);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniText = text +  ', consectetur adipiscing elit'; // ili var dodaniText = text +  ' , ' + 'consectetur adipiscing elit';
console.log(dodaniText);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var upperCase = text.toUpperCase();
console.log(upperCase);

// 6. Maknite počenu prazninu u stringu
var textBezPraznine = text.trim();
console.log(textBezPraznine);

// 7. Nađite slovo na poziciji 12
var pozicija_12 = text.charAt(12);
console.log(pozicija_12);
