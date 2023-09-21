//87. longest substring with unique characters
//Given a string, please find the longest substring that has no repeated characters.
// If there are multiple result, any one substring is fine.

//variant 1
// function longestUniqueSubstr(str) {
//     const setStr = new Set(str)
//     if (setStr.size <= 1) return str[0] || ''
//     const setResult = new Set()
//     for (const strElement of str) {
//     if (setResult.has(strElement)) {
//         return [...setResult].join('')
//     }
//         setResult.add(strElement)
//     }
// }

//variant 2
function longestUniqueSubstr(str) {
    let end = 0, start = 0, maxStart  = 0, maxEnd  = 0, maxLength = 0;

    const setFromStr = new Set();

    while (end < str.length) {
        if (!setFromStr.has(str[end])) {
            setFromStr.add(str[end])
            end++;
            if (end - start > maxLength) {
                maxLength = end - start;
                maxStart = start
                maxEnd = end
            }
        } else {
            setFromStr.delete(str[start])
            start++
        }
    }
    return str.substring(maxStart, maxEnd)
}

// console.log(longestUniqueSubstr('aaaaa'))
// 'a'
// console.log(longestUniqueSubstr('abcabc'))
// 'abc', or 'bca', or 'cab'
// console.log(longestUniqueSubstr('a12#2'))
// 'a12#'
console.log(longestUniqueSubstr('a12#2134567892'))
// '#213456789'
