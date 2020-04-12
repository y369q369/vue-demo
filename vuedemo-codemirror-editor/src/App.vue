<template>
  <div id="app">
    <!--  基础编辑器： 1 简单获取数据， 2 封装后返回值给父组件-->
    <!--<base-view />-->
    <!--  json编辑器： 1 简单获取数据， 2 封装后返回值给父组件-->
    <json-view />
  </div>
</template>

<script>
// import BaseView from "@/views/BaseView";
import JsonView from "@/views/JsonView";

export default {
  name: 'App',
  components: {
    // BaseView,
    JsonView
  }
}
</script>

<style>
</style>
