import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: ''
    },
    mutations: {
        increaseCount(state, info) {
            state.userInfo = info
        }
    }
})