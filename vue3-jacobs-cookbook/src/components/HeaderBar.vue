<template>
  <v-header class="header">
    <h1 style="-ms-flex-align: start">Jacobs Simple Cookbook</h1>
    <div v-if="notBasePath[$route.path]" class="header-image">
      <img src="../assets/ProfilePicture.jpeg" alt="Image of Jacob Boardman" />
    </div>
  </v-header>
</template>

<script>
export default {
  data() {
    return {
      notBasePath: {
        "/": false,
        "/contact-page": true,
        "/breakfast-page": true,
        "/lunch-page": true,
        "/dinner-page": true,
        "/dessert-page": true,
      },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kite+One&display=swap");

.header {
  width: 100vw;
  height: 100%;
  padding: 10px;
  background: #b4a7fdbd;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  /* background-image: url("../assets/Your-Guide-to-Kitchen-Herbs-and-Spices-Cover.jpg");
  background-position: bottom 100px;
  background-size: 100%; */
}

.header > h1 {
  margin-left: 30px;
  font-family: "Kite One", sans-serif;
  font-size: xxx-large;
}

.header-image {
  height: 100%;
  align-self: center;
  justify-self: flex-end;
  border-radius: 5px;
  border: rgb(56, 56, 56) 2px inset;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.header-image > img {
  height: 100%;
  aspect-ratio: 1/1;
}
</style>
