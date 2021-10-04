<template>
  <div>
    <input v-model="message">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useDebounceRef from './hook/useDebounceRef'
export default {
  setup() {
    // 使用自定义ref实现防抖
    let message = useDebounceRef('Hello, World', 3000)
    return {
      message
    }
  }
}
</script>

<style></style>

