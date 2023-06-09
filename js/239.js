let countSheep = function (num){
    let result = ''
    for (let i = 1; i < num+1; i++) {
        result += `${i} sheep...`
    }
    console.log(result)
}

countSheep(0) // "");
countSheep(1) // "1 sheep...");
countSheep(2) // "1 sheep...2 sheep...");
countSheep(3) // "1 sheep...2 sheep...3 sheep...");
