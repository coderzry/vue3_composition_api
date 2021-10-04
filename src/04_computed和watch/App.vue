<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
export default {
  setup() {
    // 1.定义可响应式对象
    const info = reactive({
      name: 'zry',
      age: 18,
      friend: {
        name: 'why'
      }
    })
    
    // 2.侦听器watch
    // https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E4%BE%A6%E5%90%AC%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AF%B9%E8%B1%A1
    watch(() => ({...info}), (newInfo, oldInfo) => {
      console.log(newInfo, oldInfo)
    }, {
      deep: true,
      immediate: true
    })

    const changeData = () => {
      info.friend.name = 'james'
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