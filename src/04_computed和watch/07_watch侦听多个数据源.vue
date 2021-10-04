<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  setup() {
    // 1.定义可响应式对象
    const info = reactive({name: 'zry', age: 18})
    const name = ref('why')
    
    // 2.侦听器watch 侦听多个数据源
    // 如果侦听的是数组或者对象,可以使用getter函数,并且对可响应式对象进行解构
    // https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E4%BE%A6%E5%90%AC%E5%A4%9A%E4%B8%AA%E6%95%B0%E6%8D%AE%E6%BA%90
    watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName)
    })

    const changeData = () => {
      info.name = 'why'
      // name.value = 'why'
    }

    return {
      info,
      changeData
    }
  }
}
</script>

<style scoped>

</style>