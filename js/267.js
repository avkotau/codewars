Array.prototype.customMap = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this))
    }
    return result
}

console.log(arr.customMap(el => el * 2))
