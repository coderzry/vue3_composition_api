<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    // componsitionAPI中获取ref需要先定义一个null的ref
    const title = ref(null)

    // 第二个参数flush设置post 可以使watchEffect在dom挂载之后调用
    watchEffect(() => {
      console.log(title.value);
    }, {
      flush: 'post'
    })

    return {
      title
    }
  }
}
</script>

<style scoped>

</style>