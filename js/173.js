function foo(n) {
    let oddEl = n.filter((el) => el % 2).sort((a,b) => a - b)
    console.log(n.map(el => el % 2 ? oddEl.shift() : el))
}

foo( [5, 8, 6, 3, 4])


//[7, 1]//  [1, 7]
// [5, 8, 6, 3, 4]//  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]//  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
