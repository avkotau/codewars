function solve(s){
    let countLower = 0;
    let countUpper = 0;
    s.split('').map(n => n.toLowerCase() === n ? countLower += 1 : countUpper  += 1)
    if (countLower >= countUpper) {
        return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }

}

console.log(solve("code")) //,"code");
solve("CODe") //,"CODE");
solve("COde") //,"code");
solve("Code") //,"code");
