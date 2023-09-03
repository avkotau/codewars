//157
function compare(v1, v2) {
    let arrStrV1 = []
    let arrStrV2 = []
    let prevResult1 = ''
    let prevResult2 = ''
    const maxLength = Math.max(v1.length, v2.length);
    for (let i = 0; i <= maxLength; i++) {

        if (typeof v1[i] === 'string' && v1[i] === '.' || i === maxLength ) {
            arrStrV1.push(prevResult1)
            prevResult1 = ''
        } else if(v1[i]) {
            prevResult1 += v1[i]
        }
        if (typeof v2[i] === 'string' && v2[i] === '.' || i === maxLength) {
            arrStrV2.push(prevResult2)
            prevResult2 = ''
        } else if(v2[i]){
            prevResult2 += v2[i]
        }
    }
    let resultFinish = 0
    const maxLength2 = Math.max(arrStrV2.length, arrStrV2.length);
        for (let i = 0; i < maxLength2; i++) {
            if (+arrStrV1[i] > +arrStrV2[i]) return resultFinish =  1
            if (+arrStrV1[i] < +arrStrV2[i]) return resultFinish = -1
            if (+arrStrV1[i] === +arrStrV2[i]) resultFinish = 0

        }
    return resultFinish
}

console.log(compare('12.1.0', '12.0.9'))
// // 1, meaning first one is greater

console.log(compare('12.1.0', '12.1.2'))
// // -1, meaning latter one is greater

console.log(compare('5.0.1', '5.0.1'))
// // 0, meaning they are equal.

console.log(compare('15.11.3', '5.4.411'))
// // expects 1
console.log(compare('0.1.100', '0.1.99'))
// //expects 1
