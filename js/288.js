// 151. implement Array.prototype.map()
// Please implement your own Array.prototype.map().
//
//     [1,2,3].myMap(num => num * 2)
// // [2,4,6]
// please avoid using Array.prototype.map() directly in your code.


Array.prototype.myMap = function(callback, arg) {
    const result = []

    this.forEach((item, i, arr) => {
        result[i] = callback.call(arg, item, i, arr)
    })

    return result
}
const arr = [1,2,3]
const callback = num => num * 2
console.log(arr.myMap(callback))
