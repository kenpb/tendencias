export const throttle = (fn: Function, limit: number): any => {
  let lastFunc: number
  let lastRan: number

  return function () {
    const context = this
    const args = arguments

    if (!lastRan) {
      fn.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          fn.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}
