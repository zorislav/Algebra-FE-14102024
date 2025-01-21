//1. 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina += 5;
      brojSekundi--;
    }
    return this.brzina;
  },

  zakoci: function (brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20;
      brojSekundi--;
    }
    return this.brzina;
  },
  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  },
};

console.log(auto);


//2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.

console.log(auto.brzina);
console.log(auto.zakoci(4));
console.log(auto.ubrzaj(10));
console.log(auto.promijeniBoju('plava'));

//3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)


for (key in auto) {
	const value = auto[key];
	
	if (auto.propertyIsEnumerable(key)) {
		console.log(key + ': ' + value);
	}}

//4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.

console.log('Boja mog' + auto.brend.tip + 'auta je ' + auto.boja);

//5. Pretvori svoj objekt u JSON string.

console.log (JSON.stringify(auto));

// Bonus

var jsonAdresa = '{"ulica":"Ilica", "broj": 21, "grad":"Zagreb"}';
console.log(jsonAdresa);
var adresaObjekt = JSON.parse(jsonAdresa);
console.log(adresaObjekt);

var Osoba = {
  ime:"Perica",
  prezime: "Horvat",
  age: 55,
  //toJSON.function(){
    //return this.ime + " - " + this.prezime
  //}
//};

console.log(JSON.stringify(Osoba))

var broj = 10;
console.log(broj.toString());

var Osoba2= {
  ime:"Perica",
  prezime: "Horvat"
  toString: function(){
  return "ja sam" + this.ime + " " + this.prezime;

}}

console.log(Osoba2.toString())

var datum = new Date();
console.log(datum.toString())
