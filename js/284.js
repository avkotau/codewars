//162
//Given an array of integers, all integers appear twice except one integer, could you quickly target it ?
console.time('myFunction');
function findSingle(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))[0];
}
console.log(findSingle([10, 2, 2 , 1, 0, 0, 10]))//1

console.timeEnd('myFunction');
