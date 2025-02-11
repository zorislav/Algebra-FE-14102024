var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu

var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2. Izdvojite riječ sit u zasebnu varijablu

var rijecSit = text.substr(19, 3); //substr se više neće koristiti (19, 3 - broj 19 je na kojem se nalazi prvo slovo od Sit, a 3 je broj slova koje želimo ispisati)
console.log(rijecSit);

var rijecSit2 = text.substring(19, 22); //substring će se koristiti (19, 22 - broj 19 je na kojem se nalazi prvo slovo od Sit,broj 22 je na kojem se nalazi zadnje slovo od Sit, )
console.log(rijecSit);

// Zamijenite riječ 'amet' sa riječi 'elit'

var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
a = a + 1 
a++

var dodaniTekst = text + "," + "consectetur adipiscing elit";
console.log(dodaniTekst);

//5. Konvertirajte sve riječi u orginalnom stringu u velika slova

var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

//  6. Maknite počenu prazninu u stringu

var tekstBezPraznine = text.trim();
console.log(tekstBezPraznine);

// 7. Nađite slovo na poziciji 12

var slovo = text.charAt(13);
console.log(slovo);