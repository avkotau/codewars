// const flatArray = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10, [11, 12]]]
// let result = []
// function foo(flatArray) {
//     for (let i = 0; i < flatArray.length; i++) {
//         if (Array.isArray(flatArray[i])) {
//             foo(flatArray[i])
//         } else {
//             result.push(flatArray[i])
//         }
//     }
//     return result
// }
//
// console.log(foo(flatArray))

//variant 2

const flatArray = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10, [11, 12]]]
let result = []
function foo(flatArray) {
    for (let i of flatArray) {
        if (Array.isArray(i)) {
            foo(i)
        } else {
            result.push(i)
        }
    }
    return result
}
console.log(foo(flatArray))
