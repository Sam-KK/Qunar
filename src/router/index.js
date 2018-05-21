import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import city from '@/components/city/city'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/city',
        name: 'city',
        component: city
    }
]

const router = new Router({
    routes
})

export default router
