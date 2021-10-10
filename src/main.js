import { createApp } from 'vue'
import App from './11_teleport内置组件/App.vue'
import registerDirectives from './directives'

const app = createApp(App)

registerDirectives(app)

// 全局混入minxin
// app.mixin({
//   data() {
//     return {}
//   },
//   methods: {

//   },
//   created() {
//     console.log('全局的created生命周期');
//   }
// })

// 自定义全局指令
app.directive('focus', {
  mounted(el, bindings, vnode, preVnode) {
    console.log('focus mounted');
    el.focus()
  },
})

app.mount('#app')
