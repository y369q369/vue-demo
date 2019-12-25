import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        userInfo: '',
        roles: '',
        userList: [
            {'name': 'admin', 'password': '123456', 'role': 'admin'},
            {'name': 'yangq', 'password': '123456', 'role': 'info'},
        ]
    },
    getters: {
        userNameList: state => {
            return state.userList.map(user => user.name)
        },
        getUserByName: (state) => (name) => {
            return state.userList.find(user => user.name === name)
        }
    },
    mutations: {
        login(state, info) {
            state.userInfo = info
        },
        loadRoles(state, roles) {
            state.roles = roles
        }
    },
    actions: {

    },
    plugins: [createPersistedState(
        // {storage: window.sessionStorage}            // 默认存储: localStorage里 ，改存: session中
    )]
});

export default store