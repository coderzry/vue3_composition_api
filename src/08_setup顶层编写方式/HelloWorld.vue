<template>
  <div>Hello World</div>
  <div>{{ message }}</div>
   <button @click="emitEvent">发射事件</button>
</template>

<script setup>
  // 最新版已不需导入
  // import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    message: {
      type: String,
      default: '哈哈哈'
    }
  })

  const emit = defineEmits (['increment', 'decrement'])

  const emitEvent = () => {
    emit('increment', '100000')
  }
</script>

<style>

</style>