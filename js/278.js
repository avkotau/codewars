// 105
// find the first duplicate character in a string
function _firstDuplicate(str) {
    if(str.length <= 1) return null
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if (str[i] !== str[j] && i === str.length-2) {
                return null
            } else if (str[i] === str[j]) {
                return str[i]
            }
        }
    }
}
//variant 2
function firstDuplicate(str) {
    const seenChars = new Set();
    // console.log(seenChars.has('a'))
    for (let char of str) {
        console.log(char, str)
        if (seenChars.has(char)) {
            return char;
        }
        seenChars.add(char);
    }
    return null;
}

//Given a string which might have duplicate letters, write a function to find the first duplicate.
console.log(firstDuplicate('abca'))
// 'a'

console.log(firstDuplicate('abcdefe'))
// 'e'

console.log(firstDuplicate('aa'))
// console.log(firstDuplicate('abcdef'))
// null
