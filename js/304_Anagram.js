function isAnagram(str1, str2) {
    const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();

    const formattedStr1 = formatStr(str1);
    const formattedStr2 = formatStr(str2);

    if (formattedStr1.length !== formattedStr2.length) {
        return false;
    }

    return formattedStr1.split('').sort().join('') === formattedStr2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
