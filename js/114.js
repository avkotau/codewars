function findMultiples(integer, limit) {
    let result = [];
    let integerIncrease = integer
    for (let i = 0; i <= limit; i++) {

        if (integerIncrease <= limit) {
            result.push(integerIncrease)
            integerIncrease += integer
        }

    }
    console.log(result)

}

//or
//function findMultiples(int,limit){
//   let result = []
//
//   for (let i = int; i<=limit ; i+=int)
//     result.push(i)
//
//   return result
// }

findMultiples(5, 25) // [5, 10, 15, 20, 25])
// findMultiples(1, 2) // [1, 2])
// findMultiples(5, 7) // [5])
// findMultiples(4, 27) // [4, 8, 12, 16, 20, 24])
// findMultiples(11, 54) // [11, 22, 33, 44])
