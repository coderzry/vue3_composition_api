<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  // 官方文档： https://v3.cn.vuejs.org/guide/custom-directive.html#%E7%AE%80%E4%BB%8B
  // 局部指令
  // directives: {
  //   focus: {
  //     mounted(el, bindings, vnode, preVnode) {
  //       console.log('focus mounted');
  //       el.focus()
  //     },
  //   }
  // }
}
</script>

<style>

</style>