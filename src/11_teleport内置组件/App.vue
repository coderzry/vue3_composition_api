<template>
  <div class="app">
    <!-- 
      https://v3.cn.vuejs.org/guide/teleport.html#teleport
     -->
    <teleport to="#zry">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <!-- 两个teleport挂载同一个dom会进行合并 -->
    <teleport to="#zry">
      <span>呵呵呵</span>
    </teleport>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>