// function noBoringZeros(n) {
//     console.log(+n.toString().replace(/0+$/g, ''))
// }

function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10
    }
    console.log( n)
}
noBoringZeros(1450) //, 145)
noBoringZeros(960000) //, 96)
noBoringZeros(1050) //, 105)
noBoringZeros(-1050) //, -105)
