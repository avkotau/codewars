//97. compress a string
//Given a string, compress the repeating letters with count number
function compress(str) {
    if (str.length === 0) return "";

    let compressed = "";
    let count = 1;
    let currentChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            compressed += currentChar + (count > 1 ? count : "");
            currentChar = str[i];
            count = 1;
        }
    }
    compressed += currentChar + (count > 1 ? count : "");

    return compressed;
}

console.log(compress('a')) // 'a'
console.log(compress('aa')) // 'a2'
console.log(compress('aaa')) // 'a3'
console.log(compress('aaab')) // 'a3b'
console.log(compress('aaabb')) // 'a3b2'
console.log(compress('aaabba')) // 'a3b2a'
