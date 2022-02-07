require('./bootstrap');

import { createApp, h } from 'vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueAxios,axios);

import App from './components/App.vue';

import { routes } from './routes'

const router = new VueRouter({
    mode: 'history',
    routes: routes
});


const app = new Vue({
    el: '#app',
    router: router,
    render(h) {
        return h(App)
    }
});
