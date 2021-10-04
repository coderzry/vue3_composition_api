<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    // watchEffect: 自动收集响应式的依赖
    const name = ref('zry')
    const age = ref(18)
    
    const changeName = () => name.value = 'Kobe'
    const changeAge = () => {
      age.value++
      if (age.value > 25) {
        stop()
      }
    }
    // 官方文档：https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8
    const stop = watchEffect((onInvalidate) => {
      // 模拟网络请求
      const timer = setTimeout(() => {
        console.log('网络请求成功');
      }, 2000)

      // 场景：根据name和age两个变量发送网络请求，上一次请求结果返回之前改变了name\age的值
      // 可以在这个函数中清除上一次的网络请求，每次依赖项变化时该函数都会被执行
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel()
        clearTimeout(timer)
        console.log('onInvalidate');
      })
      console.log('name:', name.value, 'age:', age.value);
    })

    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style>

</style>