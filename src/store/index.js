/*
 * @Author: xianghong.yan
 * @Date:   2018-05-23 17:19:04
 * @Last Modified by:   xianghong.yan
 * @Last Modified time: 2018-05-23 17:38:38
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: '上海'
    }
})

export default store
