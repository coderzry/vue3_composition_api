<template>
  <div>{{ message }}</div>
  <button @click="foo">按钮</button>
</template>

<script>
import { demoMixin } from './mixins/demoMinxin'
export default {
  mixins: [demoMixin],
  // 1. 返回值对象默认情况下会进行合并
  // 如果data返回值对象的属性发生了冲突，那么会保留组件自身的数据
  data() {
    return {
      title: 'Hello World',
      message: 'Hello, App'
    }
  },
  // 2. 生命周期的钩子函数会被合并到数组中，都会被调用
  created() {
    console.log('App created');
  },
  // 3. 值为对象的选项，例如methods、components和direcives,将被合并为同一个对象
  // 比如都有methods选项，并且都定义了方法，那么它们都会生效；
  // 但是如果对象的key相同，那么会取组件对象的键值对，例如minxin和组件中都有foo方法，那么会执行组件中的foo方法
  methods: {
    foo() {
      console.log('App foo');
    }
  },
}
</script>

<style>
</style>
  