function reverseWords(str) {
    let arrLetters = str.split('');
    let reverseLetters = arrLetters.reverse().join('');
    let result = reverseLetters.split(' ').reverse().join(' ')
}

//or
// function reverseWords(str) {
//   return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
// }
//or
//const reverseWords = str =>
//   str.replace(/\S+/g, val => [...val].reverse().join(``));

reverseWords('The quick brown fox jumps over the lazy dog.') //, 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// reverseWords('apple') //, 'elppa');
// reverseWords('a b c d') //, 'a b c d');
// reverseWords('double  spaced  words') //, 'elbuod  decaps  sdrow');
