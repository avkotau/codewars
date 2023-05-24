function dontGiveMeFive(start, end) {
    let result = []
    for (let i = start; i <= end; i++) {
        let str = i.toString()
        if (!str.includes('5')) {
            result.push(i)
        }
    }
    console.log(result.length)
}

dontGiveMeFive(1,9) // 8);
dontGiveMeFive(4,17) // 12);
