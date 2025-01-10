var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


function findLonestWord(niz){


}

var word = '';

for (var i = 0; i < niz.length; i++) {
if (word.length < niz[i].length) {
  word = niz[i];
}

return word;

}

var najduzaRijec = findLonestWord(words);
console.log(najduzaRijec);



console.log(word);

//2. Vratite tu riječ iz funkcije i spremite u varijablu.


//3. Ispišite varijablu u konzoli.