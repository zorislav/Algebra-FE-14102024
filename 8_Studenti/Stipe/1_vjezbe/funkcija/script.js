var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


function findLongestWord(niz){
   var word = "";
for( var i=0; i< niz.length; i++){
    if(word.length < niz[i].length){
        word = niz[i];
    }
} 
return word;
}

var najDuza = findLongestWord(words);


console.log(najDuza);

//bonus

var novaFunkcija = findLongestWord

console.log(novaFunkcija (words));

// forEach

var mojNiz =[1,2,3,4];

function ispisi(element){
    console.log(element);
}

mojNiz.forEach(ispisi);


//map

function novi(br){
    return br + 1;
}

var noviNiz = mojNiz.map(novi);

console.log(noviNiz);
    
//map

var brojevi = [5,6,7,8,9];

console.log(brojevi);