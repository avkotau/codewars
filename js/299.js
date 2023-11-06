//41. implement Merge Sort
//Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.
//
// Now you are asked to implement Merge Sort, which sorts an integer array in ascending order.
//
// Do it in-place, no need to return anything.
function merge(left, right) {
    // This will be our resulting array
    let arr = []
    // As long as there is at least one element in each half, we continue
    while (left.length && right.length) {
        // We compare the smallest elements in the front of each half
        if (left[0] < right[0]) {
            // If the smallest is in the left half, take it and add it to the result
            arr.push(left.shift())
        } else {
            // Otherwise, take the smallest from the right half
            arr.push(right.shift())
        }
    }
    // Return the sorted array with the remainder of whichever half hasn't been fully processed yet
    return [ ...arr, ...left, ...right ]
}

// We recursively split arrays in half until there's 0 or 1 element left
function mergeSort(array) {
    // Find the midpoint
    const half = array.length / 2

    // If the array has less than two elements, return it as is
    if(array.length < 2){
        return array
    }

    // Split the array into two halves, left half gets its own new array
    const left = array.splice(0, half)

    // Recursively sort both halves and then merge them
    return merge(mergeSort(left),mergeSort(array))
}

console.log(mergeSort([]))//[]
console.log(mergeSort([1]))//[1]
console.log(mergeSort([4,2,100,99,10000,-1, 99, 2])); //[-1,2,2,4,99,99,100,10000]
