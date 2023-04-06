<template>
  <v-card>
    <v-app>
      <v-app-bar height="110">
        <HeaderBar></HeaderBar>
      </v-app-bar>
      <v-navigation-drawer theme="dark" color="#ffffff">
        <NavBar></NavBar>
      </v-navigation-drawer>
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
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { HeaderBar, FooterBar, NavBar }
};
</script>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-navigation-drawer {
  box-shadow: 6px 0px 10px -8px rgba(0, 0, 0, 0.75) !important;
}

.v-main {
  background: #ffffff;
  height: 100vh;
}
</style>
