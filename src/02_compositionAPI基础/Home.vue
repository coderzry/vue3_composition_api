<template>
  <div>
    <h2>Home Page</h2>
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  /*
    参数一： props，父组件传递过来的属性 
  */
  // setup函数有哪些参数？
  // setup函数有什么样的返回值
  // context写法
  // setup(props, context) {
  // 对context解构的写法， 可以用到哪个写哪个
  setup(props, {attrs, slots, emit}) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);
  }
}
</script>

<style>

</style>