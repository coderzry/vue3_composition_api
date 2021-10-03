<template>
  <div>{{ message }}</div>
  <button @click="foo">按钮</button>
</template>

<script>
import { demoMixin } from './mixins/demoMinxin'
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: 'Hello World'
    }
  },
  methods: {
    
  },
}
</script>

<style>
</style>
  