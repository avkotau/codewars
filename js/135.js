function capitalize(s){
    let resultUp = [];
    let resultLow = [];
    for (let i = 0; i < s.length; i++) {
        i % 2 === 0 ? resultUp += s[i].toUpperCase() : resultUp += s[i]

        i % 2 !== 0 ? resultLow += s[i].toUpperCase() : resultLow += s[i]
    }
    console.log([resultUp, resultLow])
};

//or
//function capitalize(s){
//   const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//   const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//   return [even, odd];
// };

capitalize("abcdef") //,['AbCdEf', 'aBcDeF']);
capitalize("codewars") //,['CoDeWaRs', 'cOdEwArS']);
capitalize("abracadabra") //,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
capitalize("codewarriors") //,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
