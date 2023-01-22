function isPalindrome(x) {
    console.log(x.toLowerCase().split('').reverse().join('') === x.toLowerCase());
}

//or
//function isPalindrome(x, str = x.toLowerCase()) {
//   return str === [...str].reverse().join('')
// }

isPalindrome("a") //, true));
isPalindrome("aba") //, true));
isPalindrome("Abba") //, true));
isPalindrome("hello") //, false));
isPalindrome("Bob") //, true));
isPalindrome("Madam") //, true));
isPalindrome("AbBa") //, true));
isPalindrome("") //, true))


// it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
// it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
// it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
// it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
// it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
// it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
// it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
// it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true))
