//DEBOUNCE

const debounce = (fn, ms) => {
    let timer;
    return function () {

        const fnCall = () => fn.apply(this, arguments)

        clearTimeout(timer)

        timer = setTimeout((fnCall), ms)

    }
}

let wrapper = debounce(console.log, 400)
wrapper(1)
wrapper(2)
setTimeout(() => wrapper(3),100)
setTimeout(() => wrapper(4),500)
setTimeout(() => wrapper(5),1000)
