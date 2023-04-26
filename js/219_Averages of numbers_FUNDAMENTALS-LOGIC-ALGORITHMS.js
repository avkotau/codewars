function averages(numbers) {
    let result = []

    console.log(numbers ?
        numbers.map((num, i, array) => (num + array[i+1]) / 2).slice(0,-1)
        : [])
}

averages([2, 2, 2, 2, 2]) // [2, 2, 2, 2]);
averages([2, -2, 2, -2, 2]) // [0, 0, 0, 0]);
averages([1, 3, 5, 1, -10]) // [2, 4, 3, -4.5]);

