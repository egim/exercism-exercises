/**
 * @author Ed Gim
 */

 function DnaTranscriber(){
   this.dict = {
     C: 'G',
     G: 'C',
     A: 'U',
     T: 'A'
   }
 }

 DnaTranscriber.prototype.toRna = function(dna){
   return dna
    .split('')
    .map((e) => {
        if(this.dict[e])
          return this.dict[e]
        else
          throw new Error('Invalid input')
      })
    .join('')
 };

 module.exports = DnaTranscriber;
