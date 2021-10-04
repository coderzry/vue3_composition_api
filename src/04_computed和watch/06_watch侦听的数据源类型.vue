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
    const info = reactive({ name: 'zry', age: 18 })

    // 1.侦听watch时，传入getter函数
    // watch(() => info.name, (newvalue, oldValue) => {
    //   console.log('newValue:',newvalue, 'oldValue:', oldValue );
    // })

    // 2.传入一个可响应式对象：reactive对象/ref对象
    /* 
      情况一:
      reactive对象获取到的newValue和oldValue本身都是reactive对象 如下
      newValue:Proxy{name:'why',age:18}oldValue:Proxy{name:'why',age:18}
    */
    // watch(info, (newvalue, oldValue) => {
    //   console.log('newValue:',newvalue, 'oldValue:', oldValue);
    // })

    // 如果希望newValue和oldValue是一个普通的对象
    watch(
      () => {
        return { ...info }
      },
      (newvalue, oldValue) => {
        console.log('newValue:', newvalue, 'oldValue:', oldValue)
      }
    )

    /* 
      情况二: ref对象获取到的newValue和oldValue都是value本身
    */
    const name = ref('zry')
    watch(name, (newvalue, oldValue) => {
      console.log('newValue:', newvalue, 'oldValue:', oldValue)
    })

    const changeData = () => {
      info.name = 'why'
      // name.value = 'why'
    }

    return {
      info,
      changeData,
    }
  },
}
</script>

<style scoped></style>
