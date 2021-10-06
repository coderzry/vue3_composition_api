<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>

  <hello-world message="呵呵1呵" @increment="getCounter"></hello-world>
</template>

<script setup>
  // 官方文档: https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
  import { ref } from 'vue'
  import HelloWorld from './HelloWorld.vue'

  const counter = ref(0)
  const increment = () => counter.value++

  const getCounter = (payload) => {
    console.log(payload);
  }
</script>

<style>

</style>