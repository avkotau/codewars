function moveZeros(arr) {
        let arrWithout0 = arr.filter(n => n !== 0)
        for (let i = 0; i < arrWithout0.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i]);
            arr.splice(i, 1)
            i--
        }
    }
    console.log(arr)
}

//or
// var moveZeros = function (arr) {
//   return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
//   ];
// }


moveZeros([1,2,0,1,0,1,0,3,0,1]) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
moveZeros( [ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ] )// [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
