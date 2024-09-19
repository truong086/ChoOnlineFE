<template>
  
  <router-view></router-view>
  <notifications />
</template>

<script>
// import LoginPages from './components/DangKyPages.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // LoginPages
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
