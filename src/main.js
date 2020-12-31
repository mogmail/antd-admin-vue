import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/config/router.config';
import store from '@/store/store.js'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false;

app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
