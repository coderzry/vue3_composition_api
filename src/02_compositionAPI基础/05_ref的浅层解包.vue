<template>
  <div>
    <h2>Home Page</h2>

    <!-- 当我们在template中使用ref对象， 它会自动进行解包，不用写counter.value -->
    <h2>当前计数：{{ counter }}</h2>
    <!-- ref的解包只能是一个浅层解包（info是一个普通的javascript对象） -->
    <!-- 官方文档： https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html#ref-%E8%A7%A3%E5%8C%85 -->
    <h2>当前计数: {{ info.counter.value }}</h2>
    <!-- 但如果最外层包裹的是一个reactive可响应式对象，那么内容的ref可以解包 -->
    <h2>当前计数: {{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    let counter = ref(100)

    const info = {
      counter
    }

    const reactiveInfo = reactive({
      counter
    })
    // 局部函数 
    const increment = () => {
      counter.value++; 
      console.log(counter);
    }
    return {
      counter,
      info,
      reactiveInfo,
      increment
    }
  }
}
</script>

<style>

</style>