// 給我會回傳 promise 的 function 陣列，會依序執行，執行完Ａ才會執行Ｂ
export const promiseWaterfall = async (fnList) => {
  let chain = Promise.resolve()

  fnList.forEach((fn) => {
    chain = chain.then(() => fn())
  })

  return chain
}

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export const repeat = async (fn, times = Infinity, delay = 1000) => {
  let executionCount = times + 1

  while (executionCount > 0) {
    executionCount--
    await fn()
    if (delay) {
      await sleep(delay)
    }
  }
}
