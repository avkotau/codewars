function SeriesSum(n) {
    if(n === 0) return '0.00'
    let result = 1;
    for(let i = 1; i < n; i++){
        result += 1/ (1+3*i);
    }
    return result.toFixed(2)
}
SeriesSum(5)
