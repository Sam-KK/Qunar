import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import city from '@/components/city/city'

Vue.use(Router)

export default new Router({
    routes: [
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
})
