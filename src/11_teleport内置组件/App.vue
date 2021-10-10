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
import  { getCurrentInstance } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  // setup函数中需要这样获取全局变量
  setup() {
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.$name);
  },
  // 可以在生命周期中直接获取
  mounted() {
    console.log(this.$name);
  },
  methods: {
    // 也可以在method中获取
    foo() {
      console.log(this.$name);
    }
  },
}
</script>

<style>

</style>