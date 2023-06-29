function min(arr, toReturn) {
    let minNum = Math.min(...arr)
    if (toReturn === 'value') return minNum
    if (toReturn === 'index') return arr.findIndex((value) => value === minNum)
}

console.log(min([1,2,3,4,5], 'value')) // => 1
console.log(min([1,2,3,4,5], 'index')) // => 0
