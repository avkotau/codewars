function mxdiflg(a1, a2) {
    console.log( a1.length === 0 || a2.length === 0 ? -1
        : Math.max(Math.max(...a1.map(x=>x.length))-Math.min(...a2.map(x=>x.length)),Math.max(...a2.map(x=>x.length))-Math.min(...a1.map(x=>x.length))))

}

var a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
mxdiflg(a1, a2)
