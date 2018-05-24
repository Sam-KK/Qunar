import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import city from '@/components/city/city'
import Detail from '@/components/detail/detail'

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
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }
]

const router = new Router({
    routes
})

export default router
