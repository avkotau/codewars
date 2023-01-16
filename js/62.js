function removeChar(str){
    return str.slice(1,-1)

};

removeChar('eloquent')


//or
//function removeChar(str){
//  //You got this!
//   str1 = str.split('');
//   str1.shift();
//   str1.pop();
//   return str1.join('');
//
// };


//assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss')
