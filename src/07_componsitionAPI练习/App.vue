<template>
  <div>
    <h2>counter: {{counter}}</h2>
    <h2>doubleCounter: {{doubleCounter}}</h2>
    <button @click="increment">counter+1</button>
    <button @click="decrement">counter-1</button>
  </div>
</template>

<script>
import useCounter from './hooks/useCounter'
export default {
  setup() {
    
    const { counter, doubleCounter, increment, decrement } = useCounter()

    return {
      counter,
      doubleCounter,
      increment,
      decrement
    }
  }
}
</script>

<style>

</style>