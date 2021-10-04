<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">改变age</button>
  </div>
</template>

<script>
import { shallowRef, triggerRef } from 'vue'
export default {
  setup() {
    // const info = ref({ name: 'zry'})
    // shallowRef创建一个浅层的ref对象，此时修改info.name.value不会触发视图更新，需要调用triggerRef手动触发
    const info = shallowRef({ name: 'zry'})

    // 下面的修改不是响应式的
    const changeInfo = () => {
      info.value.name = 'james'
      // 手动触发
      triggerRef(info)
    }
    return {
      info,
      changeInfo,
    }
  },
}
</script>

<style></style>

