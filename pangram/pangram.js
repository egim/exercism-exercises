/*
 * Word (String) uses every character in the alpahbet once.
 * 26 Characters in alpabet (reg ex?)
*/

const alphabetCheck = /^[A-Z]+$/i

function Pangram(word){
  this.word = word
}

Pangram.prototype.isPangram = function(){
  return this.word.match(alphabetCheck)
}

module.exports = Pangram
