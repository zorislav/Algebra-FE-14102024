// export
// import

export default function ispisiPozdrav () {      // možemo imati asmo jedan default export u file-u
    console.log("Hello world!");
}

export function zbrojiDvaBroja(a, b) {          //ne-defaultnih možemo imati koliko hoćemo
    return a + b;
}

export function pomnoziDvaBroja(a, b) {          
    return a * b;
}

export const mojNiz = [1, 2, 3, 4];

export const mojObj = {
    ime : "Ivan",
    prezime : "Horvat"
}

//zadatak je tek ovdje:

export var Exercise = (function () {

    var steps = 5;

    function increaseSteps() {
        steps++;
    }

    return {
        getTotalSteps: function() {
            return steps;
        },

        walk: function () {
            increaseSteps();
        }
    }
})();