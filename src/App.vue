<template>
  <div id="app">
    <el-col :span="2">
      <el-menu
              :default-active="this.$route.path"
              router
              mode="horizontal"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span> {{ item.navItem }}</span>
          </template>

        </el-menu-item>


      </el-menu>
    </el-col>

    <router-view></router-view>
    <!--<router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>-->

    <!--<el-button @click="getRoute">路由信息</el-button>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      navList:[
        {name:'/home',navItem:'首页'},
        {name:'/admin',navItem:'管理页'},
        {name:'/user',navItem:'用户页'},
      ]
    }
  },
  methods: {
    getRoute: function () {
      window.console.log(this.$route);
    }
  }
}
</script>

<style>
</style>
