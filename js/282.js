//81
//You are given a list of sorted non-descending integer arrays, write a function to merge them into one sorted non-descending array.

function merge(arrList) {
    //variant 1
    // const result = []
    // for (const arrListElement of arrList) {
    //     result.push(...arrListElement)
    // }
    // return result.sort( (a,b) => a - b)

    //variant 2
    return arrList.flat().sort((a,b) => a -b)
}

console.log(merge(
    [
        [1, 1, 1, 100, 1000, 10000],
        [1, 2, 2, 2, 200, 200, 1000],
        [1000000, 10000001],
        [2, 3, 3]
    ]))


// example
//merge(
//   [
//     [1,1,1,100,1000,10000],
//     [1,2,2,2,200,200,1000],
//     [1000000,10000001],
//     [2,3,3]
//   ]
// )
// // [1,1,1,1,2,2,2,2,3,3,100,200,200,1000,1000,10000,1000000,10000001]
