function factorial(n) {
    // let result = 1;
    // for (let i = 1; i <= n; i++) {
    //     result = result * i
    // }
    // console.log(result)

//option two
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }

}

factorial(0) // 1);
factorial(1) // 1);
factorial(4) // 24);
factorial(7) // 5040);
factorial(17) // 355687428096000);
