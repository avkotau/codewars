function fakeBin(x){
    let result = ''
    for (let i = 0; i < x.length; i++) {
        +x[i] < 5 ? result += 0 : result += 1
    }
    console.log(result)
}
//or
//function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
//or
//function fakeBin(x) {
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

fakeBin('45385593107843568') //, '01011110001100111');
fakeBin('509321967506747') //, '101000111101101');
fakeBin('366058562030849490134388085') //, '011011110000101010000011011');
