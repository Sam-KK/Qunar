/*
 * @Author: xianghong.yan
 * @Date:   2018-05-23 17:19:04
 * @Last Modified by:   xianghong.yan
 * @Last Modified time: 2018-06-08 14:12:19
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 当用户在隐身模式或者关掉本地存储
let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {

}

const store = new Vuex.Store({
    state: {
        city: defaultCity
    },
    actions: {
        changeCity(context, city) {
            context.commit('changeCity', city)
        }
    },
    mutations: {
        changeCity(state, city) {
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {

            }
        }
    }
})

export default store
