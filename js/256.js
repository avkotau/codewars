function findOddDigits(n, k) {
    let nStr = n + ''.split('')
    if (k > n || k === 0) {
        console.log(0)
    }
    let count = 0
    let result = ''
    for (let i = 0; i <= nStr.length; i++) {

        if (+nStr[i] % 2 !== 0 && count < k && nStr[i] !== undefined) {
            result += nStr[i]
            count += 1
        }
    }
    if (Number(result) === 0 || result.length < k) {
        console.log(0)
    }
    console.log(Number(result))
}


findOddDigits(123456789111, 5) // 13579, 'Should return first k odd digits in a given number!');
findOddDigits(7459274655920285, 8) // 75975595, 'Should return first k odd digits in a given number!');
findOddDigits(0, 100) // 0, 'Oops, the given number length is less than k!');
findOddDigits(103756254800023, 2) // 13, 'Should return first k odd digits in a given number!');
findOddDigits(20406886, 6) // 0, 'Oops, there are no odd digits in a given number');
findOddDigits(11111333333307, 13) // 1111133333337, 'Should return first k odd digits in a given number!');
findOddDigits(30982, 3) // 0, 'Oops, k is bigger than a number of odd digits in a given number!');
