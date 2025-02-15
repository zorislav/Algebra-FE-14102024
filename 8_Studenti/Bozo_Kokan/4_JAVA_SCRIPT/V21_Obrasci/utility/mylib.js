// export - podjelit datoteku
// import - unijeti datoteku

export default function ispisiPozdrav (){
    console.log("Hello world!");
} // Najcesci export

// export default ispisiPozdrav; // Defaultni export prvo postavit funkciju pa nakon export funciton,Onda nije bitno kako nazivamo "import ... from ...;" 
// ili napisati prije funkcije export default.

export function zbrojiDvaBroja (a,b){
    return a + b;
}

export function pomnoziDvaBroja (a,b){
    return a * b;
}

export const mojNiz = [1,2,3,4];

export const mojObj = {
    ime: "ivan",
    prezime: "Horvat"
}

//1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().
// Exportajte modul iz datoteke.
export var Exercise = (function(){
    var steps = 0;
    function increaseSteps(){
        steps++;
    }
    return {
        getTotalSteps: function(){
            return steps;
        },
        Walk: function(){
            increaseSteps();
        } 
    }
})();

