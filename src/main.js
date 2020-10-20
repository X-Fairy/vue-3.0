import { createApp } from 'vue'
import App from './App.vue'
// 引入资源
import router from './router'
// 创建app
const app = createApp(App)
// 注册组件
import HelloWorld from '../src/components/HelloWorld'
app.component('HelloWorld', HelloWorld)
// 注入路由
app.use(router)

// 挂载实例
app.mount('#app')
