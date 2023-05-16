function monkeyCount(n) {
    const result = [];
    let count = 1;
    while (n) {
        result.push(count)
        n--
        count++
    }
    return result
}

monkeyCount(5) // [1, 2, 3, 4, 5]);
monkeyCount(3) // [1, 2, 3]);
monkeyCount(9) // [1, 2, 3, 4, 5, 6, 7, 8, 9]);
monkeyCount(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
monkeyCount(20) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
