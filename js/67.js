function correct(string) {
    let result = '';
    for(let n = 0; n < string.length; n++) {
        result += string[n] === '0' ? string[n] ='O' : string[n] === '5' ? string[n] = 'S' : string[n] === '1' ? string[n] = 'I' : string[n]
    }
    console.log(result)
}
//or
//function correct(string) {
// 	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
// }
//or
//correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
//or
// const correct = s => s.replace(/[015]/g,e=>({'0':'O','1':'I','5':'S'})[e]);

correct("L0ND0N") //"LONDON");
correct("DUBL1N") //"DUBLIN");
correct("51NGAP0RE") //"SINGAPORE");
correct("BUDAPE5T") //"BUDAPEST");
correct("PAR15") //"PARIS");
