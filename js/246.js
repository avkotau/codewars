function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '');

    const lowerCaseStr = cleanStr.toLowerCase();

    const reversedStr = lowerCaseStr.split('').reverse().join('');
    console.log(lowerCaseStr === reversedStr)
}



isPalindrome('level'); // true
isPalindrome('racecar'); // true
isPalindrome('Hello World'); // false
isPalindrome('A man, a plan, a canal. Panama'); // true
