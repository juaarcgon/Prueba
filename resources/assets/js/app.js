
import vue from 'vue';
import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import {routes} from './routes';


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.Vue = vue;

Vue.component('app', require('./components/App.vue'))

// configurar vue-router
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
    mode:'history',
    routes: routes
});

const app = new Vue({
    el:'#app',
    router: router,
    render: h => h(App)
})