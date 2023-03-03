function include(arr, item) {
    console.log(arr.some(a => a === item))
}
include([1,2,3,4], 3); //, true )
include([1,2,4,5], 3); //, false)
include([], 3); //,        false)
