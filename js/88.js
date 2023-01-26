function countBy(x, n) {
    let sum = x*n
    let z = [];
    for (let i = 1; i <= sum; i++) {
        if (i % x === 0) {
            z.push(i)
        }
    }
    console.log(z);
}



countBy(1,10), [1,2,3,4,5,6,7,8,9,10] //, "Array does not match")
countBy(2,5), [2,4,6,8,10] //, "Array does not match")
