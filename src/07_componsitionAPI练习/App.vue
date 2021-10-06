<template>
  <div>
    <h2>counter: {{counter}}</h2>
    <h2>doubleCounter: {{doubleCounter}}</h2>
    <button @click="increment">counter+1</button>
    <button @click="decrement">counter-1</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-X">scrollX: {{scrollX}}</div>
      <div class="scroll-Y">scrollY: {{scrollY}}</div>
    </div>
  </div>
</template>

<script>
import useCounter from './hooks/useCounter'
import useTitle from './hooks/useTitle'
import useScrollPosition from './hooks/useScrollPosition'
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

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition()

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY
    }
  }
}
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>