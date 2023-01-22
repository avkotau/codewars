function makeNegative(num) {
    console.log(num <= 0 ? num : num - num*2)

}

//or
//function makeNegative(num) {
//   return -Math.abs(num);
// }
//or
//function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

makeNegative(42)//, -42)
