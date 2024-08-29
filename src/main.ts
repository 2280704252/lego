import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/reset.css';

import Antd from 'ant-design-vue'


import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import '@cyhnkckali/vue3-color-picker/dist/style.css'

import store from './sotre/index';



const app = createApp(App)


app.use(Antd)

app.use(router)

//将store实例注入到所有子组件汇总，通过this.$store访问到
app.use(Vue3ColorPicker).use(store)

app.mount('#app')
