<template>
  <div>
    <!--<router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>-->
    <router-view></router-view>
    
    <!--<el-button @click="getRoute">路由信息</el-button>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    getRoute: function () {
      window.console.log(this.$route);
    },
    addNum() {
      this.$store.commit('increaseCount', 3);
    }
  }
}
</script>
