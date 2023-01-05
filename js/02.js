
let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.filter(item => item === true).length
}
countSheeps(arrayOfSheep)
