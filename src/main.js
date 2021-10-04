import { createApp } from 'vue'
import App from './06_Provide和Inject/App.vue'

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
