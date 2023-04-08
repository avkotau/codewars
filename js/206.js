function findLongest(array){
    console.log(array.reduce((acc,curr) => curr.toString().length > acc.toString().length ? curr : acc))
}

console.log(findLongest([1, 10, 100])) // 100)
findLongest([9000, 8, 800]) // 9000)
findLongest([8, 900, 500]) // 900)
