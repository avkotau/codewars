const quarterOf = (month) => {
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log(1)
            break;
        case 4:
        case 5:
        case 6:
            console.log(2)
            break;
        case 7:
        case 8:
        case 9:
            console.log(3)
            break;
        case 10:
        case 11:
        case 12:
            console.log(4)
            break;
    }
}

//or
// const quarterOf = (month) => {
//     return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
//
// }
//or
// const quarterOf = (month) => {
//     // Your code here
//     return Math.ceil(month / 3);
// }

quarterOf(12);
