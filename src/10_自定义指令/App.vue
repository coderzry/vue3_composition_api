<template>
  <div>
    <!-- 自定义指令参数 -->
   <h2 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h2>
   <h2 v-format-time>{{ timestamp }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const timestamp = 1633705525

    return {
      timestamp
    }
  }
}
</script>

<style>

</style>