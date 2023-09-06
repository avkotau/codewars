//145
function count(str) {
    const array = str.split('')
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        if(!obj.hasOwnProperty(array[i])) {
            obj[array[i]] = [array[i]]
        } else {
            obj[array[i]].push(array[i])
        }
    }
    let longestArray = [];
    for (const key in obj) {
        if ( obj[key].length > longestArray.length) {
            longestArray = obj[key];
        }
    }
    return Array.from(new Set (longestArray))
}

console.log(count('abbccc'))
// 'c'

// console.log(count('abbcccddd'))
// ['c', 'd']
