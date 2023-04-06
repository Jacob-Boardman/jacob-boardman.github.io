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
  background: #61477b;
  align-items: flex-start;
  justify-content: flex-end;
}

.navbar > .navItem {
  color: #fff;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 15px;
  transition: 0.3s;
  font-weight: bold;
  width: 80%;
  border-radius: 14px;
  background: #61477b;
  box-shadow: 7px 7px 7px #57406f, -7px -7px 7px #6b4e87;
}

.navItem:hover {
  color: #000;
  background: #f2e6d8;
  border-radius: 14px;
  box-shadow: inset 7px 7px 7px #dacfc2, inset -7px -7px 7px #fffdee;
}

.navbar > .navItem > a {
  color: #000;
  text-decoration: none;
}

.navbar > .navItem > a:visited {
  color: #000;
  text-decoration: none;
}
</style>
