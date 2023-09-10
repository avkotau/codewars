//120
//A Prime number is a natural number greater than 1 that is divisible only by itself and 1, such as 2,3,5....
// You are asked to implement isPrime() to check if a number is prime.

//variant 1
// function isPrime(num) {
//     if (num <= 1) return false
//     if (num === 4) return false
//     for (let i = 2; i < num/2; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }


//variant 2
function isPrime(num) {
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    const sqrt = Math.sqrt(num)
    for (let i = 3; i <= sqrt; i+=2) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(251))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
