function openOrSenior(data) {
    console.log(data.map((n, i) =>n[0] >= 55 && n[1] > 7 ? 'Senior' : 'Open'))

}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20], [35,20]])
//['Open', 'Senior', 'Open', 'Senior']
