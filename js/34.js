var countSheep = function (num){
    let sheep = '';
    if(num <= 0) return ""
    for(let i = 1; i <= num; i++) {
        sheep += `${i} sheep...`

    }
    console.log(sheep)
}
countSheep(3)
