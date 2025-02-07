// 1. Kreiraj objekt koji reprezentira neki auto

var auto = {
    brend: {
        tip: 'Volvo',
        model: 'V40'
    },
    boja: 'Crvena',
    brzina: '60',
    maxBrzina: 160,
    godinaProizvodnje: 1998,
    ubrzaj: function(brojSekundi) {
        while (brojSekundi && this.brzina <= this.maxBrzina) {
            this.brzina += 5;
            brojSekundi--;
        }
        return this.brzina;
    },
    zakoci: function(brojSekundi) {
        while (brojSekundi && this.brzina > 0) {
            this.brzina -= 20;
            brojSekundi--;
        }
        return this.brzina;
    },
    promijeniBoju: function(novaBoja) {
        this.boja = novaBoja;
        return this.boja;
    }
};

// 2. Pozovite funkcije svog objekta s argumentima i ispišite rezultat

console.log(auto.brzina);
console.log(auto.zakoci(4));
console.log(auto.ubrzaj(10));
console.log(auto.promijeniBoju('Plava'));

// 3. Sa petljom pristupi svim brojivim svojstvima tvoj auto objekta

for (var key in auto) {
    var value = auto[key];
    if (auto.propertyIsEnumerable(key)) {
         console.log(key + ': ' + value);
    }
}

// 4. Ispisi u konzoli razumljivu recenicu koja ukljucuje bar 2 svojstva tvoj objekta

console.log("Boja mog " + auto.brend.tip + " auta je " + auto.boja);

// 5. Pretvori svoj objekt u JSON string

console.log(JSON.stringify(auto));

// Bonus

var jsonAdresa = '{"ulica":"Ilica","broj":21,"grad":"Zagreb"}';
console.log(jsonAdresa);