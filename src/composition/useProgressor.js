import { ref } from 'vue'
import { limitToMax, limitToMin } from '@/utils/math.js'

export const useProgressor = () => {
  const progress = ref(0)

  const runner = {
    runningProgress: null,
    pauseHandle: Promise.resolve(),
    cancelHandle: Promise.resolve(),
    state: 'stop',
    continue: () => {},
    pause() {
      if (this.state === 'pause' || this.state === 'stop') {
        return
      }
      this.state = 'pause'
      this.pauseHandle = new Promise((resolve) => {
        this.continue = () => {
          resolve('pause')
          this.pauseHandle = Promise.resolve()
          this.continue = () => {}
          this.state = 'running'
        }
      })
    },
    async cancel() {
      if (this.state === 'stop') {
        return
      }
      try {
        await (this.cancelHandle = Promise.reject())
      } catch (e) {
        this.continue()
        await this.runningProgress
        this.continue = () => {}
        this.cancelHandle = Promise.resolve()
      }
    },
    async run(duration = 1000, direction = 1) {
      await this.cancel()

      this.runningProgress = new Promise((resolve) => {
        this.state = 'running'
        let previousTimeStamp
        const step = 100 / duration

        const exec = async (timestamp) => {
          try {
            const type = await this.pauseHandle
            await this.cancelHandle
            if (type === 'pause') {
              previousTimeStamp = undefined
              window.requestAnimationFrame(exec)
              return
            }
          } catch (e) {
            resolve()
            return
          }

          if (!previousTimeStamp) {
            previousTimeStamp = timestamp
          }

          const length = timestamp - previousTimeStamp
          previousTimeStamp = timestamp

          if (direction === 1) {
            progress.value = limitToMax(progress.value + length * step, 100)

            if (progress.value < 100) {
              window.requestAnimationFrame(exec)
            } else {
              resolve()
            }
          } else if (direction === 0) {
            progress.value = limitToMin(progress.value - length * step, 0)

            if (progress.value > 0) {
              window.requestAnimationFrame(exec)
            } else {
              resolve()
            }
          }
        }
        window.requestAnimationFrame(exec)
      }).then(() => {
        this.state = 'stop'
      })
      return this.runningProgress
    },
  }

  return {
    progress,
    runner,
  }
}
