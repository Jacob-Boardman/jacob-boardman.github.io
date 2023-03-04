<template>
  <header class="header"> Jacobs Simple Cookbook</header>
  <div class="navbar flex-container">
    <router-link class="navItem" to="/">About Me</router-link>
    <a class="navItem" href="breakfast.html">Breakfast</a>
    <a class="navItem" href="lunch.html">Lunch</a>
    <a class="navItem" href="dinner.html">Dinner</a>
    <a class="navItem" href="afters.html">Afters/dessert</a>
    <router-link class="navItem" to="/contact-page">Contact Me</router-link>
  </div>
</template>
<style scoped>
.header {
  font-family: auto;
  font-style: italic;
  font-size: xx-large;
  text-align: center;
  padding: 20px;
  text-align: center;
  background: #e3bbf354;
}

.header>h1 {
  font-family: auto;
  font-size: xxx-large
}
</style>