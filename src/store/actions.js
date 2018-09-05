import * as types from './mutations-type'
const actions = {
    changeCity(context, city) {
        context.commit(types.CHANGE_CITY, city)
    }
}

export default actions
