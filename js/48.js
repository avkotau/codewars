function positiveSum(arr) {
    console.log(arr.filter(i => i > 0 ).reduce((a,b) => a + b,0))
}

positiveSum([1,2,3,4,5]) //15
