import './bootstrap';
import Vue from 'vue';
import App from './App.vue';


createApp(App).mount('#app');
const app = new Vue({
    render: h => h(App)
}).$mount('#app');

