<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-view name="left" style="float:left;width:50%;height:300px;background:#ccc"/>
    <router-view name="right" style="float:right;width:50%;height:300px;background:red"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
