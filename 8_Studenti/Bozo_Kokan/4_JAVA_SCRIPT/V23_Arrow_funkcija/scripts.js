const fn = () => "Bok";

console.log(fn());

const fn1 = (par) => `Dobio sam ${par}`; 
// jedan argument ne mora biti u (), ako ima vise treba biti i onda je kontekst `Dobio sam ${par} i ${par2}`
// ili 
// {let odg = `Dobio sam ${par} i ${par2}` 
// return odg;
// }

console.log(fn('22'));

// const Osoba = {
//     ime: 'Ivica',
//     pozdrav: function(){
//         console.log('Bok');
//     }
// };

// Osoba.pozdrav();

// Arrow funkcija samo sa jednom komandom bez bloka {}
// // const Osoba = {
// //     ime: 'Ivica',
// //     pozdrav: () =>  console.log('Bok')
// // };

// Krace pisanje koda primjer unutar objekta
// // const Osoba = {
// //     ime: 'Ivica',
// //     pozdrav (){
// //                 console.log('Bok')
// //               };
// // }


// Krace pisanje koda
function Pas(vrsta, boja){

    let myBoja = boja;
    let myVrsta = vrsta;

    function myGlas (){
        console.log ("Lajem");      
    }

    return {    
       boja,
       vrsta,
       myGlas
    }
}

const Rex = new Pas("mali", "crni");
console.log(Rex.myBoja); // undifined mora imati unutar return da nesto vrati inace je samo unutar funkcije || objekta definirani ne izvan...
console.log(Rex.boja);
Rex.myGlas();