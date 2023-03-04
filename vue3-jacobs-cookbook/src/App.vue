<template>
  <HeaderBar></HeaderBar>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/contact-page">Contact Me</router-link>
  </div>
  <router-view/>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {HeaderBar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
