<template>
  <HeaderBar ></HeaderBar>
  <router-view/>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {HeaderBar},
  data() {
    return{
    }
  }
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
