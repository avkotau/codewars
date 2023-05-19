// [object Object] {
//     chislo: 8,
//         massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
//         result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
// }
// let massivChisel = [1, 2, 3, 4, 5, 6, 7, 8];
// let chislo = 8;


function sostavChisla(massivChisel, chislo) {
    // код писать только внутри данной функции
    //return [[1, 2], [3]];
    let arr = [];
    let summ = 0;
    for(let a = 0; a <= massivChisel.length; a++) {
        //console.log(massivChisel[a])
        for(let b = 0; b <= massivChisel.length; b++) {
            //console.log(massivChisel[b]+ a)
            summ = massivChisel[b]+ a
            if(summ === 8) arr.push(a,b)
            console.log(arr)





        }

    }

}

sostavChisla([1, 2, 3, 4, 5, 6, 7, 8], 8)
// 1a
// 1b
// 2b
// 3b
// 4b
// 5b
// 6b
// 7b
// 8b
// undefinedb
// 2a
// 1b
// 2b
// 3b
// 4b
// 5b
// 6b
// 7b
// 8b
// undefinedb
// 3a
// 1b
// 2b
// 3b
// 4b
// 5b
// 6b
// 7b
// 8b
// undefinedb
