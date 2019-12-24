import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        userInfo: '',
        userList: ['admin','yangq'],
        userDetailList: [
            {'admin': {'password': '123456', 'role': 'admin'}},
            {'yangq': {'password': '123456', 'role': 'info'}},
        ]
    },
    mutations: {
        login(state, info) {
            state.userInfo = info
        }
    },

    plugins: [createPersistedState(
        // {storage: window.sessionStorage}            // 默认存储: localStorage里 ，改存: session中
    )]
})

export default store