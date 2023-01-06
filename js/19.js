function getDifference(arr) {
    console.log(arr.map(i => i <= 0 ? i*-1 : -i))
}

let arr = [1,-2,3,-4,5];

getDifference(arr)
