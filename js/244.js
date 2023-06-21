const arr1 = ['apple', 'banana', 'orange'];
const arr2 = ['banana', 'cherry', 'apple', 'bread'];

function findMatchingKeys() {
    let newObj = {}
    let set = new Set(arr2)
    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {
            newObj[arr1[i]] = arr1[i]
        }
    }
    return newObj
}

const result = findMatchingKeys(arr1, arr2);

console.log(result);
