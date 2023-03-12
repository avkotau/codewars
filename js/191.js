function narcissistic(value) {
    let arrValue = String(value).split('')
    let result = 0;
    for (let i = 0; i < arrValue.length; i++) {
        result += Math.pow(+arrValue[i], arrValue.length)
    }
    console.log(result === value)

}

narcissistic(  7); // true
narcissistic(153); // true
