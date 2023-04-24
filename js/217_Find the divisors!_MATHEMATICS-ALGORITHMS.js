function divisors(integer) {
    let result = [];
    for (let i = 2; i < integer-1; i++) {
        if(integer % i === 0) {
            result.push(i)
        }
    }
    if(result.length === 0) {
        return `${integer} is prime`
    }
    return result
}

divisors(15) // [3, 5]);
divisors(12) // [2, 3, 4, 6]);
divisors(13) // "13 is prime");
