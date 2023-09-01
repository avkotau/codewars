const num = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]

let firstNum = num[0]
for (let i = 0; i < num.length; i++) {
    if (num[i] > firstNum) {
        firstNum = num[i]
    }
}
console.log(firstNum)
