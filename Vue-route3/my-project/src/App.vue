<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p></p>
    <div>
      <button @click="goBack">后退</button>
      <button @click="toBack">前进</button>
      <button @click="goHome">回到首页</button>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/Hello world">Params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/999/Hello">goParams</router-link>|
    <router-link to="/Hi1">goHi1</router-link>|
    <router-link to="/Hello">Hello</router-link>|
    <router-link to="/Home1">Home1</router-link>|

    <transition name="fade" mode="out-in">
      <router-view/>  
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    toBack(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
