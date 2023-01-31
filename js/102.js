function sumDigits(number) {
    let arr = '';

    arr = [...'' + Math.abs(number)]
    let num = arr.map(Number)
    console.log(num.reduce((a,b) => a+b))
}
//or
//function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }

sumDigits(10) //, 1);
sumDigits(99) //, 18);
sumDigits(-32) //, 5);
