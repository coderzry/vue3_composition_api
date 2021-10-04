import { customRef } from 'vue'

// 自定义ref实现防抖效果
export default function(value, delay = 1000) {
  let timeout = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay);
      }
    }
  })
}