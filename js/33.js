function grow(x) {
    let result = x.reduce((a,b) => a * b)

    console.log(result)
}

grow([1, 2, 3])
