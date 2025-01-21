var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function  findLongestWord (niz)
{    
    var word= "";
    for (var i=0; i < niz.length; i++)
    {
        if (word.length < niz[i].length)
        {
            word = niz[i];
        }
    }
    return word;
}


// function  findLongestWord (niz) //ZA VISE RIJECI ISTE DUZINE
// {    
//     var word= "";
//     for (var i=0; i < niz.length; i++)
//     {
//         if (word.length < niz[i].length)
//         {
//             word = niz[i];
//         }
//         else if (word.length == niz[i].length)
//         {
//             word += " and " + niz[i];
//         }
//     }
//     return word;
// }

var longestWord = findLongestWord(words);

console.log(longestWord);

// Bonus

var novaFunkcija = findLongestWord;

novaFunkcija(words);
console.log(novaFunkcija(words))

// forEach

var mojNiz = [1,2,3,4];

function ispisi (element)
{
    console.log(element);
}

mojNiz.forEach(ispisi);

// mojNiz.forEach //anonimna funckija
// (
//     function (el) 
//     {
//         console.log(el);
//     }
// )

// map

function novi(br)
{
    return br + 1;
}

var noviNiz = mojNiz.map(novi);

// var noviNiz = mojNiz.map
// (
//     function (x)
//     {
//         return x + 1;
//     } 
// );

console.log(mojNiz);
console.log(noviNiz);