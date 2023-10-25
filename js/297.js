// 40. implement Bubble Sort
//Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.
//
// Now you are asked to implement Bubble Sort, which sorts an integer array in ascending order.
//
// Do it in-place, no need to return anything.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([4, 2, 100, 99, 10000, -1, 99, 2])) //[-1,2,2,4,99,99,100,10000]


