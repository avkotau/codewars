function largestPairSum (numbers) {
    console.log(numbers.sort((a,b) => b-a)[0] + numbers.sort((a,b) => b-a)[1])
}

//or
//function largestPairSum(numbers) {
//   var [a, b] = numbers.sort((a, b) => b - a)
//   return a + b
// }
//or
// function largestPairSum(numbers){
//   numbers.sort(function(a, b){ return b - a });
//   return numbers[0] + numbers[1];
// }

largestPairSum([10,14,2,23,19]); //, 42
largestPairSum([-100,-29,-24,-19,19]); //, 0
largestPairSum([1,2,3,4,6,-1,2]); //, 10
largestPairSum([-10, -8, -16, -18, -19]); //, -18
