/*import Router from './router'
import App from './App.vue'
import { createApp } from 'vue'

createApp(App).use(Router).mount('#app')*/
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import * as Veux from 'vuex';
import './axios'
import App from "./App.vue";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Register from "@/components/Register"
import Forgot from "@/components/Forgot"
import Reset from "@/components/Reset"

const store = Veux.createStore({
    state: {
        user: null
    },
    getters:{
        user: (state) => {
            return state.user
        }
    },
    actions: {
        user(context, user){
            context.commit('user', user)
        }
    },
    mutations:{
        user(stat, user){
            stat.user = user
        }
    }
})

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/forgot', component: Forgot},
    {path: '/reset/:token', component: Reset}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

Vue.createApp(App).use(router).use(store).mount('#app');
