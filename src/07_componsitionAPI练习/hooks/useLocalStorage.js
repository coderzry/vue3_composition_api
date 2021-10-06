import { ref, watch } from 'vue'

export default function(key, value) {
  const data = ref(value)

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  })

  return data
}

// // 只传一个参数 取值
// const data = useLocalStorage('name')
// // 传两个参数 保存值
// const data = useLocalStorage('name', 'coderwhy')

// // 后续也可以更改
// data.value = 'kobe'