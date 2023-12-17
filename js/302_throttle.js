function throttle(func, ms) {
  // whether requests are ignored or not
  let isThrottled = false

  let saveArgs
  let saveThis

  function wrapper() {
    if (isThrottled) {
      saveArgs = arguments
      saveThis = this

      return
    }
    func.apply(this, arguments)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false
      if (saveArgs) {
        wrapper.apply(saveThis, saveArgs)
        saveThis = saveArgs = null
      }
    }, ms)
  }

  return wrapper
}

function mouseMove() {
  console.log(new Date())
}

mouseMove = throttle(mouseMove, 3000)

setInterval(mouseMove, 3000)




