function getDifference1(arr) {
    console.log(arr.map(i => i <= 0 ? i*-1 : -i))
}

let arr1 = [1,-2,3,-4,5];

getDifference1(arr1)

//or

function getDifference(arr) {
    console.log(arr.map(i => -i))
}

let arr = [1,-2,3,-4,5, -10];

getDifference(arr)
