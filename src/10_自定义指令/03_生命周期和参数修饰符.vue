<template>
  <div>
    <button v-if="counter < 2" v-zry.aaa.bbb="'coderzry'" @click="increment">当前计数：{{ counter }}</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  // 局部指令
  directives: {
    zry: {
      created(el, bindings, vnode, preVnode) {
        console.log('zry created', el, bindings, vnode, preVnode);
        // 指令传入的参数可以通过bindings.value拿到
        console.log(bindings.value);  // coderzry
        // 指令的修饰符可以通过bindings.modifiers拿到，为一个对象
        console.log(bindings.modifiers);  // {aaa: true, bbb: true}
      },
      beforeMount() {
        console.log('zry beforeMount');
      },
      mounted() {
        console.log('zry mounted');
      },
      beforeUpdate() {
        console.log('zry beforeUpdate');
      },
      beforeUnmount() {
        console.log('zry beforeUnmount');
      },
      unmounted() {
        console.log('zry unmounted');
      }
    }
  },

  setup() {
    const counter = ref(0)
    const increment = () => counter.value++

    return {
      counter,
      increment
    }
  }
}
</script>

<style>

</style>