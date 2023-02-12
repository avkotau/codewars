function addLength(str) {
    let strLeng = str.split(' ');
    let result = [];
    for (let i = 0; i < strLeng.length; i++) {
        console.log(strLeng[i].length ? result.push(strLeng[i] +' '+ strLeng[i].length) : '')
    }
     console.log(result)
}

addLength('apple ban');//["apple 5", "ban 3"]);

addLength('you will win')//,["you 3", "will 4", "win 3"]));
