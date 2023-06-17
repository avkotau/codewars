let arr = [-101,-1,0,100,101,5,3,0,-2];

const customMaxSort = arr.sort(sorting)
function sorting  (a,b) {
    if (a > b) {
        return 1
    }
    if (b > a) {
        return -1
    }
    return 0
}

console.log(customMaxSort)
