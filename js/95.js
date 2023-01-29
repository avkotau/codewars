let capitals = function (word) {
    let resultArr = []
    word.split([]).map((n, i) => n === n.toUpperCase() ? resultArr.push(i) : '')
    console.log(resultArr)
};


capitals('CodEWaRs') //, [0,3,4,6] )

