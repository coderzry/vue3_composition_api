<template>
  <div>
    <!-- 这里的不会被继承 只会继承对象中的选项 -->
    <h2>哈哈哈哈</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello, Page'
    }
  },
  methods: {
    bar() {
      console.log('base page bar');
    }
  },
}
</script>

<style>

</style>