<template>
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
      drawer: null
    };
  }
};
</script>
<style scoped>
.navbar {
  display: flex;
  flex-flow: column wrap;
  background: #ffffff;
  align-items: flex-start;
  justify-content: flex-end;
}

.navbar > .navItem {
  color: #000000;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 15px;
  transition: 0.3s;
  font-weight: bold;
  width: 80%;
  border-radius: 14px;
  background: #e3bbf354;
  box-shadow: 7px 7px 7px #d9d9d9, -7px -7px 7px #ffffff;
}

.navItem:hover {
  color: #000000;
  background: #e3bbf354;
  border-radius: 14px;
  box-shadow: inset 7px 7px 7px #c19fcf54, inset -7px -7px 7px #ffd7ff54;
}

.navbar > .navItem > a {
  color: #000000;
  text-decoration: none;
}

.navbar > .navItem > a:visited {
  color: #000000;
  text-decoration: none;
}
</style>
