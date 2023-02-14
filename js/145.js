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
//or
//const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

console.log(solve("code")) //,"code");
solve("CODe") //,"CODE");
solve("COde") //,"code");
solve("Code") //,"code");
