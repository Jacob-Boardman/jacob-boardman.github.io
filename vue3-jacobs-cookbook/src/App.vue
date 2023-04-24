<template>
  <v-card>
    <v-app>
      <v-app-bar height="110">
        <HeaderBar></HeaderBar>
      </v-app-bar>
      <v-navigation-drawer
        theme="dark"
        color="#ffffff"
        width="250"
        elevation="5"
      >
        <NavBar :recipes="recipes"></NavBar>
      </v-navigation-drawer>
      <v-main class="ml-4">
        <router-view @data="setData" />
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
  components: { HeaderBar, FooterBar, NavBar },
  data() {
    return {
      recipes: {}
    };
  },
  methods: {
    setData(data) {
      this.recipes = data;
    }
  }
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

.v-main {
  background: #e3bbf354;
  min-height: 100%;
}
</style>
