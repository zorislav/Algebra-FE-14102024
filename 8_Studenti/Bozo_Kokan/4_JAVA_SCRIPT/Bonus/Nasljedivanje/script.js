// class Osoba {
//     govor() {
//         return 'Govorim..';
//     }
// }

// const ivica = new Osoba();
// const marica = new Osoba();

// Osoba.prototype.govor = function() {
//     return 'Novi govor...';
// }

// const osoba1 = {
//     govor() {
//         return ' Govorim ....';
//     }
// }

// function osoba() {};
// osoba.prototype.govor = function() {
//     return 'Govorim...';
// }

// ivica.lokacija = 'Pula';

// const pero = Object.create(ivica);

// const iva = {};
// const mara = {};
// Object.setPrototypeOf(iva, osoba1);
// Object.setPrototypeOf(mara, ivica);

// ----------------------------------------------- //
//                 NOVI KOD                        //

function pjevaj() {
    return this;
}
const ptica = {
    ime: 'kos',
    pjevaj: pjevaj
};

function intro() {
    return ` Ja sam ${this.ime}`;
}

const Ivica = {
    ime: 'Ivica',
    upoznavanje: intro
};

const Marica = {
    ime: 'Marica',
    upoznavanje: intro
};

const ivica_nepromjenjivi = {
    ime: 'Ivica_nepromjenjivi'
};

const ivica_nepromjenjivi_intro = intro.bind(ivica_nepromjenjivi)();

function Osoba(n) {
    this.ime = n;
    this.govor = function() {
        console.log(this);
    }
    setTimeout (function(){
        console.log(this)
    }.bind(this),2000);
} ;

const Ivana = new Osoba('Ivana');

// const Ivana = new Osoba('Ivana') ---> u browseru vraca object