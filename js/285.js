//3. implement Array.prototype.flat()
//There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.
// Could you manage to implement your own one?
// Here is an example to illustrate
function flat(arr, depth = 1) {
    if (depth === 0) return arr;

    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flat(item, depth - 1));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]
console.log(flat(arr, 1))
// [1, 2, 3, [4]]
console.log(flat(arr, 2))
// [1, 2, 3, 4]
console.log(flat([1, 2, 3, [4,3, [4,3, [4,3, [4,3, [4,3, [4,3, [4]]]]]]]], 7))
//  [1, 2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4]
