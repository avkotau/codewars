//167
function getIntersection(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) return []
    let concatArrays = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                concatArrays.push(arr2[j])
            }
        }
    }
    return Array.from(new Set(concatArrays))
}

console.log(getIntersection([1,2,3], [3,2,1]))
console.log(getIntersection([], [3,2,1]))
console.log(getIntersection([1,100, 200, 8,8,8,3,6,100, 10, 10], [8, 7, 7, 50,50, 1,1,1,1,3,3]))
console.log(getIntersection([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,3,3,3,3,3,2,2,2,], [2]))
