var text = " Lorem ipsum dolor sit amet";

//1. Spremite duljinu stringa u varijablu.

var duljinaStringa = text.length;
console.log(duljinaStringa);

//2. Izdvojite riječ 'sit' u zasebnu varijablu.

var rijecSit = text.substr(19, 3);
console.log(rijecSit);

var rijecSit2 = text.substring(19, 22);
console.log(rijecSit2);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.

var zamjena = text.replace("amet", "elit");
console.log(zamjena);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.

var prosireniTekst = text + "," + " consectetur adipiscing elit";
console.log(prosireniTekst);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova

var velikaSlova = text.toUpperCase(text);
console.log(velikaSlova);

//   6. Maknite počenu prazninu u stringu
var prazninaDel = text.trim(text);
console.log(prazninaDel);

//7. Nađite slovo na poziciji 12

var slovo = text.charAt(13);
console.log(slovo);
