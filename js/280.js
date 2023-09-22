//Can the first string be derived from the letters of the second string (each letter of the second line can only be used once)

//variant 1
// function substr(str1, str2) {
// let arrFromStr = str1.split('')
// let arrFromStrMain = str2.split('')
//
// for (let i = 0; i < arrFromStr.length; i++) {
//         let index = arrFromStrMain.indexOf(arrFromStr[i])
//         if (index !== -1) {
//             arrFromStrMain.splice(index, 1)
//             continue
//         } else {
//             return false
//         }
// }
// return true
// }

//variant 2
function substr(str1, str2) {
    // Создаем объекты для подсчета количества каждого символа
    let countStr1 = {};
    let countStr2 = {};

    // Заполняем объекты
    for (let char of str1) {
        countStr1[char] = (countStr1[char] || 0) + 1;
    }
    for (let char of str2) {
        countStr2[char] = (countStr2[char] || 0) + 1;
    }

    // Проверяем, есть ли достаточное количество каждого символа в str2
    for (let char in countStr1) {
        if (!countStr2[char] || countStr2[char] < countStr1[char]) {
            return false;
        }
    }

    return true;
}


console.log(substr('ja', 'java'))// true
// console.log(substr('jaa', 'java'))// true
// console.log(substr('jaf', 'java'))// false
// console.log(substr('aa', 'aab')) // true
