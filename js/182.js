// function tribonacci(signature,n){
//     let arr = signature;
//     let result = [].concat(signature);
//     if (n === 0) {
//         return []
//     } else if (n === 1) {
//         return [n]
//     }
//     for (let i = 0; i < n-3; i++) {
//         arr.push(arr.reduce((a,b)=>a+b))
//         result.push(arr[arr.length-1])
//         arr.shift(0)
//     }
//     return result
// }
//or
function tribonacci(signature,n){
  for (let i = 0; i < n-3; i++) {
    signature.push(signature[i] + signature[i+1] + signature[i+2]);
  }
  console.log(signature.slice(0, n));
}

tribonacci( [1,1,1], 10) // [1,1,1,3,5,9,17,31,57,105]
tribonacci( [0,0,1], 10) // [0,0,1,1,2,4,7,13,24,44]
tribonacci( [0,1,1], 10) // [0,1,1,2,4,7,13,24,44,81]
tribonacci( [1,0,0], 10) // [1,0,0,1,1,2,4,7,13,24]
tribonacci( [0,0,0], 10) // [0,0,0,0,0,0,0,0,0,0]
tribonacci( [1,2,3], 10) // [1,2,3,6,11,20,37,68,125,230]
tribonacci( [3,2,1], 10) // [3,2,1,6,9,16,31,56,103,190]
tribonacci( [1,1,1],  1) // [1]
tribonacci([300,200,100], 0) // []
tribonacci([11,13,10], 2) // [ 11, 13 ]
