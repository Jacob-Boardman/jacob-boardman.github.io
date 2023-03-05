<template>
  <header class="header"> 
    <h1 style="-ms-flex-align: start;">Jacobs Simple Cookbook</h1>
    <div v-if="notBasePath[$route.path]" class="header-image">
      <img src="../assets/ProfilePicture.jpeg" alt="Image of Jacob Boardman">
    </div>
</header>
  <div class="navbar flex-container">
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
    return{
      notBasePath: {
        '/': false,
        '/contact-page': true,
        '/breakfast-page': true,
        '/lunch-page': true,
        '/dinner-page': true,
        '/dessert-page': true
      }
    }
  },
  created() {
    console.log(this.notBasePath);
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

.header > h1 {
  font-family: auto;
  font-size: xxx-large;
}

.header-image > img{
    border-radius: 5px;
    border: rgb(56, 56, 56) 2px inset;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 100px;
    height: 100px;
  }

</style>