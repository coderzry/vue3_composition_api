<template>
  <div>
    <h2>Home Page</h2>

    <h2>当前计数：{{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    // 在setup函数中定义的数据提供响应性的特征，可以使用reactive的函数
    /* 
      使用reactive函数处理数据之后，数据再次使用时就会进行依赖收集
      当数据发生改变是，所有的依赖都是进行对应的响应式操作（比如更新界面）
      事实上，我们编写的data选项，也是内部交给了reactive函数将其变成响应式对象的
    */
    const state = reactive({
      counter: 100
    })
    // 局部函数
    const increment = () => {
      state.counter++; 
      console.log(state.counter);
    }
    return {
      state,
      increment
    }
  }
}
</script>

<style>

</style>