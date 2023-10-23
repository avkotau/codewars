//155. create a count function
//Please create a function count(), when called it should return how many times it has been
// called, count.reset() should also implemented.

const count = (function () {
    let count = 0

    function incriment() {
        return ++count
    }

    incriment.reset = function () {
        return count = 0
    }

    return incriment
})()


console.log(count())
console.log(count())
console.log(count.reset())
console.log(count())
console.log(count())
console.log(count())
