//145
function count(str) {
    let obj = {};

    // add quantity characters in obj
    for (let char of str) {
        obj[char] = (obj[char] || 0) + 1;
    }

    // Find the maximum characters
    let maxFreq = Math.max(...Object.values(obj));

    // Filter the characters that match the maximum quantity
    let mostFrequentChars = Object.keys(obj).filter(char => obj[char] === maxFreq);

    // If there's only one character with maximum quantity, return it. Otherwise, return the array.
    return mostFrequentChars.length === 1 ? mostFrequentChars[0] : mostFrequentChars;
}

console.log(count('abbccc'))
// 'c'

console.log(count('abbcccddd'))
// ['c', 'd']
