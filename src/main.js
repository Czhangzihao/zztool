import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ZZTOOL from "../lib/index";
import 'element-plus/dist/index.css';
// 挂在全局
const widnows = window;
widnows.zztool = new ZZTOOL();
const app = createApp(App);
app.provide("$ZZTOOL", new ZZTOOL());
app.mount('#app');
