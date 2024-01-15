// https://medium.com/@t4rg4rnen/%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9-js-579327722bab
//Find the missing number in a given array of integers

function findNum(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] + 1 !== arr[i + 1] ) {
            return arr[i] + 1
        }
    }
    return false
}

console.log(findNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20])) //12


//Find a number that appears twice in an array of integers

function twiceNumber(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] === arr[i + 1] ) {
            return arr[i]
        }
    }
    return false
}

console.log(twiceNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20]))//17


//Find the largest and smallest elements in a not sorted array

function findElement(arr) {
    let sortedArr = arr.sort((a,b) => a - b)
    return [sortedArr[0], sortedArr[sortedArr.length - 1]]
}

console.log(findElement([19, 11, 0, 1, 2, 14, 20, 3, 4, 5, 6, 7, 8, 9, 10,  12, 13, 15, 16, 17, 18]))// [0, 20]

//Find all duplicates in an array

function findAllDuplicates(arr) {
    const collectionEl = {}
    const duplEls = []
    for (let i = 0; i < arr.length; i++) {
        if (collectionEl[arr[i]]) {
            duplEls.push(arr[i])
            collectionEl[arr[i]] += 1
        } else {
            collectionEl[arr[i]] = 1
        }
    }
    return duplEls
}

console.log(findAllDuplicates([19, 18, 11, 0, 1, 2, 14, 2, 20, 3, 4, 5, 20, 6, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18])) //[2, 20, 18]
