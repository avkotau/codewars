function DNAtoRNA(dna) {
    let arr = dna.toUpperCase().split('')
    arr.map((n, i) => n === 'T' ? arr.splice(i,1,'U') : arr[i]).flat(Infinity).join('')
    console.log(arr.join(''))
}

DNAtoRNA("TTTTT")

//or
//function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

//    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
//     assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
//     assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")

