function setReducer(input) {
    let reducedArr = input;

    while (reducedArr.length > 1) {
        let i = 0;
        let j = 1;
        const tempArr = [];

        while (j <= reducedArr.length) {
            if (reducedArr[i] === reducedArr[j]) {
                j++;
            } else {
                tempArr.push(j - i);
                i = j;
                j++;
            }
        }

        reducedArr = tempArr;
    }

    return reducedArr[0];
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])); //[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2] //output: 2,

setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]); // output: 3,

setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]); // 13,

setReducer([0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4]); // 5,

setReducer([9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9]); // 3,

setReducer([5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7]); // 3,

setReducer([5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1]); // 2,

setReducer([7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3]); // 3,

setReducer([6, 0, 5, 9, 5, 0, 0, 2, 5, 0]); // 3,

