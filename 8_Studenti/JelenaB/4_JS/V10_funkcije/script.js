var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function findLongestWord(array) {
  var word = "";
  for (let i = 0; i < array.length - 1; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
  return word;
}

var longestWord = findLongestWord(words);

console.log(longestWord);
