function add(num1, num2) {
    let arr1 = num1 + ''.split()
    let arr2 = num2 + ''.split()

    let result = []
    for (let i = arr2.length-1; i >= 0; i--) {
        // console.log('fun;')
        // console.log(+num1.toString()[i] + +num2.toString()[i]);
        result.unshift(+num1.toString()[i] + +num2.toString()[i])
    }

    // console.log(Number(result.join('')))
    console.log(result.join(''))
}

add(2, 11) // 13);
// add(0, 1) // 1);
// add(0, 0) // 0);

// add(16, 18) // 214);
// add(26, 39) // 515);
// add(122, 81) // 1103);
