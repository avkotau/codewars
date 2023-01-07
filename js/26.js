function countPositivesSumNegatives(input) {
    let a = 0;
    let b = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        input.filter((num) => num > 0 ? a++ : b += num);
    }
    console.log([a , b]) ;

}

countPositivesSumNegatives([ +0, +0 ])
countPositivesSumNegatives([ -89 ])
countPositivesSumNegatives([ 52 ])
countPositivesSumNegatives([  ])
countPositivesSumNegatives([-94,-14])
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
