export default {
  install(app) {
    // vue全局属性 任何地方都可以使用
    app.config.globalProperties.$name = 'coderzry' 
  }
}