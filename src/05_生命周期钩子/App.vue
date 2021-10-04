<template>
  <div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value++
    }
    // https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
    // 可以通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子。
    /* 
      因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，
      所以不需要显式地定义它们。
      换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。
    */
    //  这些函数接受一个回调函数，当钩子被组件调用时将会被执行:
    onMounted(() => {
      console.log('App Mounted');
    }),
    onUpdated(() => {
      console.log('App onUpdated');
    }),
    onUnmounted(() => {
      console.log('App onUnmounted');
    })

    return {
      counter,
      increment
    }
  }
}
</script>

<style>

</style>