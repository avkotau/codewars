const sequenceSum = (begin, end, step) => {
    if(begin > end ) return 0
    let result = 0;
    for (let i = begin; i <= end; i+= step) {
        result += i
    }
    return result
    //or
    // let sum = 0
    // for (let i = begin; i <= end; i += step) sum += i;
    // console.log(sum)
};

sequenceSum(2, 6, 2) //, 12) 2+ 4+6
sequenceSum(1, 5, 1) //, 15) 1+2+3+4+5
sequenceSum(1, 5, 3) //, 5) 1+4
