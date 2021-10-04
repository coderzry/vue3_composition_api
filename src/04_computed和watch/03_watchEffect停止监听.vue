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

    /* 
      某些情况下，我们希望停止监听，可以获取watchEffect的返回值函数，调用即可
      如changeAge函数中age.value大于25时调用返回值函数停止监听
    */
    const stop = watchEffect(() => {
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