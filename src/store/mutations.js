import * as types from './mutations-type'

const mutations = {
    // 城市选取
    [types.CHANGE_CITY](state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {

        }
    }
}

export default mutations
