//leetcode
//125. Valid Palindrome

let isPalindrome = function(s) {
    let reg = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reversed = reg.split('').reverse().join('')
    return reg === reversed
};

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('raceacar')) //false
console.log(isPalindrome('ab_a'))// true
console.log(isPalindrome('Marge, let\'s \\"[went].\\" I await {news} telegram.')) // true


//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
