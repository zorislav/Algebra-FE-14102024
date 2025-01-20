//1. Kreiraj objekt koji reprezentira neki specifični auto
var auto = {
  //sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.) a jedna je također objekt.
  brend: {
    //brend je objekt a ovo ispod su njegova svojstva
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,

  // Probajte referencirati druge vrijednosti objekta u funkcijama.
  // Svaka funkcija mora primati argumente i vracati neku vrijednost.

  //ovo su funkcije:
  ubrzaj: function (brojSekundi) {
    while (brojSekundi > 0 && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5; //this.brzina +=5; (može i tako)
      brojSekundi = brojSekundi - 1; //brojSekundi--; (može i tako)
    }
    return this.brzina;
  },

  zakoci: function (brojSekundi) {
    while (brojSekundi > 0 && this.brzina > 0) {
      this.brzina = this.brzina - 20;
      brojSekundi = brojSekundi - 1;
    }
    return this.brzina; // ?
  },

  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  },
};
console.log(auto);

//2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.

console.log(auto.brzina);
console.log(auto.zakoci(4)); //4 je brojSekundi
console.log(auto.ubrzaj(10)); //10 je brojSekundi
console.log(auto.promijeniBoju("plava"));

//3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti zajedno sa njihovim ključevima

for (var key in auto) {
  var value = auto[key];
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + " : " + value);
  }
}

//3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.

console.log(" Boja mog " + auto.brend.tip + " auta je " + auto.boja);

//4. Pretvori svoj objekt u JSON string.

console.log(JSON.stringify(auto));

//Bonus

var jsonAdresa = '{"ulica": "Ilica", "broj": 21, "grad":"Zagreb"}';
console.log(jsonAdresa);
var adresaObjekt = JSON.parse(jsonAdresa);
console.log(adresaObjekt);

var Osoba = {
  ime: "Radovan",
  prezime: "Horvat",
  age: 55,
  toJSON: function () {
    return this.ime + " - " + this.prezime;
  },
};
console.log(JSON.stringify(Osoba));

var broj = 10;
console.log(broj.toString());

var Osoba2 = {
  ime: "Radovan",
  prezime: "Horvat",
  toString: function () {
    return " Ja sam " + this.ime + " " + this.prezime;
  },
};

console.log(Osoba2.toString());

var datum = new Date();
console.log(datum.toString());
console.log(datum.toLocaleString());
