<template>
  <div id="app">
   <!--<Layout_noRouter />-->
    <router-view></router-view>
  </div>
</template>

<script>
    // 不添加路由， 菜单栏写死的组件，使用需要把main.js中的router注释掉
    // import Layout_noRouter from "./layout_noRouter/Layout";

    export default {
      name: 'app',
      components: {
          // Layout_noRouter,
      }
    }
</script>
