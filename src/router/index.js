import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import city from '@/components/city/city'
import Detail from '@/components/detail/detail'

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
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
