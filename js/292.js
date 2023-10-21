//binary search
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function binarySearch(array, item) {
    let start = array[0]
    let end = array[array.length-1]
    let currentEl;

    for (const arrayEl of array) {
        currentEl = Math.floor((start + end) / 2)

        if (currentEl === item) {
            return currentEl
        }

        if (currentEl < item) {
            start = currentEl + 1
        }

        if (currentEl > item) {
            end = currentEl - 1
        }
    }
}

console.log(binarySearch(array, 8))
