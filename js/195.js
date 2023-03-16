function solution (roman) {

    let trn = new Map();
    //let rom = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

    trn.set('I', 1);
    trn.set('V', 5);
    trn.set('X', 10);
    trn.set('L', 50);
    trn.set('C', 100);
    trn.set('D', 500);
    trn.set('M', 1000);

    let num = 0;
    roman = roman.replace('IV', 'III').replace('IX', 'VIIII');
    roman = roman.replace('XL', 'XXXX').replace('XC', 'LXXXX');
    roman = roman.replace('CD', 'CCCC').replace('CM', 'DCCCC');

    for (let romElement of roman) {
        num += trn.get(romElement)
    }
    console.log(num)

}

//or
//function solution(roman)
// {
// 	var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
//   var numbers = roman.split('');
//   var sum = 0, i;
//
// 	for(i = 0; i < numbers.length; i++)
//   {
//   	if(data[numbers[i]] < data[numbers[i+1]])
//     {
//     	sum += data[numbers[i+1]] - data[numbers[i]];
//       i++;
//     }
//     else
//     {
//     	sum += data[numbers[i]];
//     }
//   }
//
//   return sum;
// }

//or
//function solution(roman) {
//   var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
//   return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
// }

//or
//function solution(roman){
//    var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
//
//    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
// }

solution('XXI') // 21
solution('I') // 1
solution('IV') // 4
solution('MMVIII') // 2008
solution('MDCLXVI') // 1666

solution('MDCXC') // 1690
