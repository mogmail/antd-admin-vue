import { createApp } from 'vue';
// import Vuex from 'vuex'
import App from './App.vue';
import Antd from 'ant-design-vue';
import router from './config/router.config';
// import store from './store/store';

import 'ant-design-vue/dist/antd.css';


// const newstore = new Vuex.Store(store)
const app = createApp(App, Antd)

app.use(router)
app.mount('#app')
