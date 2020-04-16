<template>
  <div id="app">
    <axios-view />
  </div>
</template>

<script>
import AxiosView from "@/components/AxiosView";

export default {
  name: 'App',
  components: {
    AxiosView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
