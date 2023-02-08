function DNAStrand(dna){
    let result = ''
    for (let i = 0; i <= dna.length; i++) {
        dna[i] === 'A' ? result += dna[i]= 'T'
            : dna[i] === 'T' ? result += dna[i]= 'A'
            : dna[i] === 'G' ? result += dna[i]= 'C'
            : dna[i] === 'C' ? result += dna[i]= 'G'
            : ''
    }
    console.log(result)
}
//or
//function DNAStrand(dna){
//   return dna.replace(/[ACGT]/g, function(l){ return pairs[l] });
// }
//
// var pairs = {
//   A:'T',
//   T:'A',
//   G:'C',
//   C:'G'
// };
//or
//function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }
//
// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};
//
// function DNAStrand(dna){
//     console.log(dna.split('').map(function(v){ return pairs[v] }).join(''));
// }

DNAStrand("AAAA") //,"TTTT","String AAAA is")
DNAStrand("ATTGC") //,"TAACG","String ATTGC is")
DNAStrand("GTAT") //,"CATA","String GTAT is")
