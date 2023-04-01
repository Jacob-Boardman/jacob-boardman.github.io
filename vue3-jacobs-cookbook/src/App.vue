<template>
  <v-card>
    <v-app>
      <v-navigation-drawer theme="dark" color="#c281bd" width="200">
        <NavBar></NavBar>
      </v-navigation-drawer>
      <v-app-bar height="110">
        <HeaderBar></HeaderBar>
      </v-app-bar>
      <v-main class="ml-4">
        <router-view />
      </v-main>
      <v-footer>
        <FooterBar></FooterBar>
      </v-footer>
    </v-app>
  </v-card>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { HeaderBar, FooterBar, NavBar }
}
</script>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-navigation-drawer {
  box-shadow: 6px 0px 10px -8px rgba(0, 0, 0, 0.75) !important
}
</style>
