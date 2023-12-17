// 43. implement Quick Sort
//Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.
//
// Now you are asked to implement Quick Sort, which sorts an integer array in ascending order.
//
// Do it in-place, no need to return anything.
//
// Follow-up
//
// What is time cost for average / worst case ? Is it stable?

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const less = []
    const equal = arr[arr.length - 1];
    const greater = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (equal >= arr[i]) {
            less.push(arr[i])
        }
        if (equal < arr[i]) {
            greater.push(arr[i])
        }
    }

    return [...quickSort(less), equal, ...quickSort(greater)]
}

console.log(quickSort([])) // []
console.log(quickSort([1])) // [1]
console.log(quickSort([4, 2, 100, 99, 10000, -1, 99, 2])) // [-1,2,2,4,99,99,100,10000]

