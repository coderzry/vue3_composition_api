<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>

    <button @click="homeIncrement">HomeCounter+1</button>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name')
    const counter = inject('counter')

    const homeIncrement = () => counter.value++

    return {
      name,
      counter,
      homeIncrement
    }
  }
}
</script>

<style>

</style>