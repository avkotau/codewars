function maskify(cc) {

    let result = '';
    let sliceNumberCreditCard = cc.slice(-4)
    for (let i = 0; i < cc.length - 4; i++) {
        result += '#'
    }
    result += sliceNumberCreditCard
    console.log(result)

}

maskify('4556364607935616') // '############5616');
maskify('1') // '1');
maskify('11111') // '#1111');
