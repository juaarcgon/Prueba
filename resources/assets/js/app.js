
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('App', require('./components/App.vue'));
Vue.component('Home', require('./components/Home.vue'));
Vue.component('Perros', require('./components/Perros.vue'));

const router = new VueRouter({
    mode:'history',
    routes: routes
});
const app = new Vue({
    el:'#app',
    router: router,
    render: h => h(App)
})