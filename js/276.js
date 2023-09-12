//111
//A palindromic string reads the same backward as forward, such as 'madam'.
// Now given a string, count how many substrings it has?
// Like 'madam', it has following palindromic strings:
// 'm'
// 'a'
// 'd'
// 'a'
// 'm'
// 'ada'
// 'madam'
function countPalindromicSubstr(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += countPalindrome(str, i, i)
        count += countPalindrome(str, i, i + 1)
    }
    return count
}

function countPalindrome(str, left, right) {
    let count = 0;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        count++;
        left--;
        right++;
    }
    return count
}

console.log(countPalindromicSubstr("a")) //  expects 1
console.log(countPalindromicSubstr("ab")) //  expects 2
console.log(countPalindromicSubstr("aaa")) //  expects 6
console.log(countPalindromicSubstr("aba")) //  expects 4
console.log(countPalindromicSubstr("abac")) //  expects 5
console.log(countPalindromicSubstr("abaca")) //  expects 7
console.log(countPalindromicSubstr("abacacacaca")) //  expects 28
console.log(countPalindromicSubstr("")) // expects 0
console.log(countPalindromicSubstr("madam")) //  expects 7
