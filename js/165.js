function expressionMatter(a, b, c) {
    let maxNumber = [];
    maxNumber.push((a + b) * c)
    maxNumber.push(a * (b + c))
    maxNumber.push(a + b + c)
    maxNumber.push(a * b * c)
    console.log(Math.max(...maxNumber))
}

expressionMatter(2, 1, 2) // 6);
expressionMatter(2, 1, 1) // 4);
expressionMatter(1, 1, 1) // 3);
expressionMatter(1, 2, 3) // 9);
expressionMatter(1, 3, 1) // 5);
expressionMatter(2, 2, 2) // 8);
