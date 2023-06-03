
function maskify(cc) {
    if(cc.length <=4) return cc
    let lastFourLetters = '';
    for (let i = cc.length-4; i < cc.length; i++) {
        lastFourLetters += cc[i]
    }

    let partStr = cc.slice(0,cc.length-4)
    let replacedStr = partStr.replaceAll(/./g, '#')
    return replacedStr + lastFourLetters
}

maskify('4556364607935616' )// '############5616');
maskify('1' )// '1');
maskify('11111' )// '#1111');
