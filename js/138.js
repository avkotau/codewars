function addLength(str) {
    let strLeng = str.split(' ');
    let result = [];
    for (let i = 0; i < strLeng.length; i++) {
        console.log(strLeng[i].length ? result.push(strLeng[i] +' '+ strLeng[i].length) : '')
    }
     console.log(result)
}

//or
//function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }
//or
//let addLength = (str) => str.split(' ').map(n => `${n} ${n.length}`)

addLength('apple ban');//["apple 5", "ban 3"]);

addLength('you will win')//,["you 3", "will 4", "win 3"]));
