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
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');

#app {
  font-family: 'Kite One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-navigation-drawer {
  box-shadow: 6px 0px 10px -8px rgba(54, 31, 68, 0.75) !important;
}

.v-main {
  background: #e3bbf354;
}
</style>
