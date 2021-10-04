import { createApp } from 'vue'
import App from './07_componsitionAPI练习/App.vue'

const app = createApp(App)

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

app.mount('#app')
