/*
 * @Author: xianghong.yan
 * @Date:   2018-05-23 17:19:04
 * @Last Modified by:   xianghong.yan
 * @Last Modified time: 2018-05-24 09:44:31
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 当用户在隐身模式或者关掉本地存储
// let defaultCity = '上海'
// try {
//     if (localStorage.city) {
//         defaultCity = localStorage.city
//     }
// } catch (e) {

// }

// const store = new Vuex.Store({
//     state: {
//         city: defaultCity
//     },
//     actions: { // 处理你要干什么，异步请求，判断
//         changeCity(context, city) {
//             context.commit('changeCity', city)
//         }
//     },
//     mutations: {
//         changeCity(state, city) {
//             state.city = city
//             try {
//                 localStorage.city = city
//             } catch (e) {

//             }
//         }
//     },
//     getters: {
//         city(state) {
//             return state.city
//         }
//     }
// })

const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})

export default store
