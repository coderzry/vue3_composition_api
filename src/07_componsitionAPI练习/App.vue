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
import useTitle from './hooks/useTitle'
export default {
  setup() {
    // counter
    const { counter, doubleCounter, increment, decrement } = useCounter()

    // title
    // useTitle hook会返回一个响应式的ref,后续我们可以在这个组件中继续修改title
    const titleRef = useTitle('coderzry')
    setTimeout(() => {
      titleRef.value = 'kobe'
    }, 2000)

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