var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(niz){
    var word = "";

    for(var  i=0; i < words.length; i++){
    if(word.length < words[i].length){
        word = words[i];
    }
}
return word;
}

var najduzaRijec = findLongestWord(words);

console.log(najduzaRijec);

// Bonus

var novaFunkcija = findLongestWord;

console.log(novaFunkcija(words));

// forEach

var mojNiz = [1,2,3,4];

function ispisi(element){
    console.log(element);
}

mojNiz.forEach(ispisi);

// mojNiz.forEach(function(el){
//     console.log(el);
// })

// map

function novi(br){
    return br + 1;
}

var noviNiz = mojNiz.map(novi);

// var noviNiz = mojNiz.map(function(x) {
//     return x+1;
// });

console.log(mojNiz);
console.log(noviNiz);