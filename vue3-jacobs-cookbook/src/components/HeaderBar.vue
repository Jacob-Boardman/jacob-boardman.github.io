<template>
  <v-header class="header">
    <h1 style="-ms-flex-align: start;">Jacobs Simple Cookbook</h1>
    <div v-if="notBasePath[$route.path]" class="header-image">
      <img src="../assets/ProfilePicture.jpeg" alt="Image of Jacob Boardman">
    </div>
  </v-header>
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
  width: 100vw;
  height: 100%;
  font-family: auto;
  font-style: italic;
  font-size: xx-large;
  padding: 10px;
  background: #e3bbf354;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.header>h1 {
  font-family: auto;
  font-size: xxx-large;
}

.header-image {
  align-self: center;
  height: 100%;
}

.header-image>img {
  border-radius: 5px;
  border: rgb(56, 56, 56) 2px inset;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 100px;
}
</style>