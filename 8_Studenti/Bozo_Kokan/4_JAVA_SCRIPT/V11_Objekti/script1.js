const noviObjekt = {};
const boje = [ 'crvena', 'zelena'];

const Zivotinja = {
    vrsta: 'Pas',
}

console.log(Zivotinja);

const fido = Object.create(Zivotinja); // fido prototype je Zivotinja
fido.rep = 'kratak';

console.log(fido);

const rex = Object.create(fido); // rex prototype je fido
rex.dlaka = 'crna';

console.log(rex);

class Osoba {
    govor() {
        return 'Govorim..';
    }
}

class SuperOsoba extends Osoba {
    let() {
        return 'Letimo';
    }
}

const ivica = new SuperOsoba();

function osoba(ime) {
    this.ime = ime;
}

const ivan = new osoba('ivan');

osoba.prototype.govor = function() {
    return 'Govorim..';
}