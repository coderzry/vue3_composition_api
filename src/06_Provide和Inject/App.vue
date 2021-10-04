<template>
  <div>
    <home />
    <h2>{{counter}}</h2>
    <button @click="increment">AppCounter+1</button>
  </div>
</template>

<script>
import { ref, readonly, provide } from 'vue'
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  setup() {
    const name = ref('coderzry')
    let counter = ref(100)

    const increment = () => counter.value++
    /* 
      官方文档
      https://v3.cn.vuejs.org/guide/component-provide-inject.html
      https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html
    */
    provide('name', readonly(name))
    provide('counter', readonly(counter))

    return {
      counter,
      increment
    }
  }
}
</script>

<style>

</style>