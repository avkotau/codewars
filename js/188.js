function sum(n) {
    console.log(n)
    return function (a) {
        return sum(n + a)

    }
}

sum(5)(4)(11)

