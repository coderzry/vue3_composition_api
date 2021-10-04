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
    const changeAge = () => age.value++

    /* 
      立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    */
    watchEffect(() => {
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