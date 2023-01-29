let capitals = function (word) {
    let resultArr = []
    word.split([]).map((n, i) => n === n.toUpperCase() ? resultArr.push(i) : '')
    console.log(resultArr)
};
//or
// let capitals = function (word) {
//   return word.split('').reduce(function(n, l, i){
//     return /[A-Z]/.test(l) && n.push(i), n;
//   }, []);
// };
//or
// let capitals = word => [...word].reduce((arr, v, i) => /[A-Z]/.test(v)? [...arr, i] : arr, []);

capitals('CodEWaRs') //, [0,3,4,6] )

