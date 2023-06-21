function findMostFrequentNumbers(numbers, n) {
    let resultArr = {};
    let frequentlyNumber = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!resultArr[numbers[i]]) {
            resultArr[numbers[i]] = 1;
        } else {
            resultArr[numbers[i]] += 1;
        }
    }

    const sortedKeys = Object.keys(resultArr).sort((a, b) => resultArr[b] - resultArr[a]);

    for (let i = 0; i < n; i++) {
        if (sortedKeys[i]) {
            frequentlyNumber.push(parseInt(sortedKeys[i]));
        }
    }

    return frequentlyNumber;
}

const numbers = [1, 2, 3, 4, 2, 3, 1, 3, 4, 5, 5];
const n = 2;
const result = findMostFrequentNumbers(numbers, n);
console.log(result); // [3, 1]

