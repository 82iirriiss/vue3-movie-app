import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

createApp(App)
.use(router) // 현재의 프로젝트에 특정한 플러그인을 연결 할 때 사용함.
.use(store)
.mount('#app')