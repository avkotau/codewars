function generateRange(min, max, step){
    let result = []
    for (let i = min; i <= max; i+=step) {
        result.push(i)
    }
    return result
}

generateRange(2, 10, 2) // [2,4,6,8,10]);
