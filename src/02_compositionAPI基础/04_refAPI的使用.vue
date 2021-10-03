<template>
  <div>
    <h2>Home Page</h2>

    <!-- 当我们在template中使用ref对象， 它会自动进行解包，不用写counter.value -->
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    /* 
      ref 接收参数并将其包裹在一个带有 value property 的对象中返回，
      然后可以使用该 property 访问或更改响应式变量的值 
    */
    // counter变成一个ref的可响应式的引用
    let counter = ref(100)
    // 局部函数 
    const increment = () => {
      counter.value++; 
      console.log(counter);
    }
    return {
      counter,
      increment
    }
  }
}
</script>

<style>

</style>