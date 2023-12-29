const twoSumOn2 = (arr, num) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (sum === num) {
                result.push(i, j)
            }
        }
    }
    return result
}

console.log(twoSumOn2([2, 7, 11, 15], 9)) //[0, 1] O(n2)


const twoSumOn = (arr, num) => {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === num) {
            return [left, right]
        } else if (sum < num) {
            left += 1
        } else {
            right -= 1
        }
    }
    return []
}

console.log(twoSumOn([2, 7, 11, 15], 9)) //[0, 1] O(n)
