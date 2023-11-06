//42. implement Insertion Sort

//Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.
//
// Now you are asked to implement Insertion Sort, which sorts an integer array in ascending order.
//
// Do it in-place, no need to return anything.
//
// Follow-up
//
// What is time cost for average / worst case ? Is it stable?

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];

        let position;

        for (position = i - 1; position >= 0 && arr[position] > currentElement; position--) {
            arr[position + 1] = arr[position];
        }

        arr[position + 1] = currentElement;
    }
    return arr
}

console.log(insertionSort([]))//[]
console.log(insertionSort([1]))//[1]
console.log(insertionSort([4,2,100,99,10000,-1, 99, 2]))//[-1,2,2,4,99,99,100,10000]

