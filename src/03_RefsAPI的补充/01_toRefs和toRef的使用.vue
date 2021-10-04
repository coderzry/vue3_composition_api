<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeAge">改变age</button>
  </div>
</template>

<script>
import { reactive, toRefs,toRef } from 'vue'
export default {
  setup() {
    const info = reactive({ name: 'zry', age: 18 })
    /* 
      1.toRefs:将reactive对象中的所有属性都转成ref，建立链接
      使用场景: 对reactive对象进行解构时需要使用toRefsAPI
      将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref。
      当从组合式函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应性的情况下对返回的对象进行解构/展开：
    */
    // let { name, age } = toRefs(info);

    /* 
      2.toRef:对其中一个属性进行转换ref，建立链接
      toRef可以用来为源响应式对象上的某个 property 新创建一个 ref。
      然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
    */
    let { name } = info
    let age = toRef(info, 'age')

    const changeAge = () => {
      age.value++
    }
    return {
      name,
      age,
      changeAge,
    }
  },
}
</script>

<style></style>
