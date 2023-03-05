<template>
  <v-header class="header">
    <h1 style="-ms-flex-align: start;">Jacobs Simple Cookbook</h1>
    <div v-if="notBasePath[$route.path]" class="header-image">
      <img src="../assets/ProfilePicture.jpeg" alt="Image of Jacob Boardman">
    </div>
  </v-header>
  <div class="d-flex justify-center align-center mb-2 navbar">
    <router-link class="navItem" to="/">About Me</router-link>
    <router-link class="navItem" to="/breakfast-page">Breakfast</router-link>
    <router-link class="navItem" to="/lunch-page">Lunch</router-link>
    <router-link class="navItem" to="/dinner-page">Dinner</router-link>
    <router-link class="navItem" to="/dessert-page">Desserts</router-link>
    <router-link class="navItem" to="/contact-page">Contact Me</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notBasePath: {
        '/': false,
        '/contact-page': true,
        '/breakfast-page': true,
        '/lunch-page': true,
        '/dinner-page': true,
        '/dessert-page': true
      }
    }
  }
}
</script>

<style scoped>
.header {
  font-family: auto;
  font-style: italic;
  font-size: xx-large;
  padding: 10px;
  background: #e3bbf354;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 114px;
}

.header>h1 {
  font-family: auto;
  font-size: xxx-large;
}

.header-image>img {
  border-radius: 5px;
  border: rgb(56, 56, 56) 2px inset;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 100px;
}

.navbar {
  background: #995695a2;
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
  border-top: rgb(247, 216, 40) 5px solid;
}

.navbar>.navItem {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  transition: 0.3s;
  font-weight: bold;
}

.navItem:hover {
  color: #000;
  background: #F2E6D8
}

.navbar>.navItem>a {
  color: #000;
  text-decoration: none;
}

.navbar>.navItem>a:visited {
  color: #000;
  text-decoration: none;
}
</style>