// export
// import

export default function ispisiPozdrav() {
    console.log("Hello World!");
}

export function zbrojiDvaBroja(a,b){
    return a + b;
}

export function pomnoziDvaBroja(a,b){
    return a * b;
}

export const mojNiz = [1,2,3,4];

export const mojObj = {
    ime: "Ivan",
    prezime: "Horvat",
};


export var Exercise = (function(){

        var steps = 0;

        function increaseSteps (){
            steps++;
        }

        return {
            getTotalSteps: function(){
                return steps;
            },
            walk: function() {
                increaseSteps();
            }
        }
})();