function persistence(num) {
    if (num < 10) return 0
    const strNum = num.toString().split('')
    const result = strNum.reduce((acc, digit, ) => acc * Number(digit), 1 )
    return 1+ persistence(result)
}

console.log(persistence(39)) // 3);
console.log(persistence(4)) // 0);
console.log(persistence(25)) // 2);
console.log(persistence(999)) // 4);
