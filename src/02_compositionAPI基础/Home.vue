<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { ref, readonly } from 'vue';
export default {
  setup() {
    // 1.普通对象
    // const info1 = {name: 'zry'};
    // const readonlyInfo1 = readonly(info1);

    // 2.响应式对象
    // const info2 = reactive({
    //   name: 'zry'
    // })
    // const readonlyInfo2 = readonly(info2)

    // 3.响应式对象ref
    const info3 = ref('zry');
    const readonlyInfo3 = readonly(info3)
    const updateState = () => {
      // readonlyInfo1.name = 'coderzry'; 
      readonlyInfo3.name = 'coderzry'
    }
    return {
      updateState
    }
  }
}
</script>

<style>

</style>