function doubleChar(str) {
    const newStr = str.split('');
    const result  = newStr.map((n) => n+n )
    console.log(result.join(""))
}

//or
//function doubleChar(str) {
//     console.log(str.replace(/(.)/g, "$1$1"))
// }
//or
//function doubleChar(str) {
//     console.log(str.replace(/./g, '$&$&'));
// }



doubleChar("abcd") //, "aabbccdd");
doubleChar("Adidas") //, "AAddiiddaass");
doubleChar("1337") //, "11333377");
doubleChar("illuminati") //, "iilllluummiinnaattii");
doubleChar("123456") //, "112233445566");
doubleChar("%^&*(") //, "%%^^&&**((");
