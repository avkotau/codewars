function digitalRoot(n) {
    let result = 0
    const arrNum = n.toString().split('')
    for (let i = 0; i < arrNum.length; i++) {
        result += Number(arrNum[i])
    }
    if (result.toString().length > 1) {
        return digitalRoot(result)
    } else {
        return result
    }
}


console.log(digitalRoot(16)) //, 7
console.log(digitalRoot(456)) //, 6
