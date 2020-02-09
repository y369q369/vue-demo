import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showSideBar: true,
    },
    getters: {
        getSideBar: state => {
            return state.showSideBar ? 'outdent' : 'indent';
        },
    },
    mutations: {
        setSideBar(state, showSideBar) {
            state.showSideBar = showSideBar
        },
    },
    actions: {

    },
    plugins: [createPersistedState(
        {storage: window.sessionStorage}            // 默认存储: localStorage里 ，改存: session中
    )]
});

export default store;