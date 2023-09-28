// 106
//Given an array of integers, find two number that sums up to 0, return their indices.
//
// There might be multiple pairs, any of them would do. If not found, return null
function findTwo(arr) {
    // variant 1
    // let result = []
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === 0) {
    //             result.push(i, j)
    //         }
    //     }
    // }
    // if (result.length === 0) return null
    // return result

    //variant 2
    let result = []
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            obj[arr[i]] = i
        }
        if (obj[-arr[i]] !== undefined) {
            result.push(obj[-arr[i]], i)
        }
        obj[arr[i]] = i
    }
    return result.length === 0 ? null : result

    //variant 3
    // let result = [];
    // let map = new Map();
    //
    // for (let i = 0; i < arr.length; i++) {
    //     let complement = -arr[i];
    //
    //     if (arr[i] === 0 && arr.length === i+1) {
    //         complement = arr[i]
    //         map.set(arr[i], i);
    //     }
    //
    //     if (map.has(complement)) {
    //         result.push(map.get(complement), i);
    //     }
    //     map.set(arr[i], i);
    // }
    // return result.length === 0 ? null : result;
}

console.log(findTwo([1, 2, 3, -1]))
// [0,3]
console.log(findTwo([1, 2, 3, -1, -2, 0]))
// [0,3] or [1,4] or [5, 5]
console.log(findTwo([1, 2, 3, 4, 5]))
// null
console.log(findTwo([1, 2, 3, 4]))
// null
