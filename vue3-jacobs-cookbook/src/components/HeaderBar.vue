<template>
  <header
    class="header d-flex flex-wrap flex-row justify-space-between align-center"
  >
    <h1
      class="text-center align-self-center flex-grow-1"
      :class="notBasePath[$route.path] ? 'ml-7' : 'ml-n16'"
    >
      The Mindless Cookbook
    </h1>
    <div
      class="usermenu mr-4 rounded-lg d-flex justify-center align-center flex-wrap justify-space-evenly"
    >
      <v-icon size="x-large" class="logout mx-1" :onClick="logout"
        ><LogoutIcon
      /></v-icon>
      <v-icon size="x-large" class="addRecipe mx-1" :onClick="addRecipe"
        ><PencilPlusIcon
      /></v-icon>
    </div>
    <div v-if="notBasePath[$route.path]" class="header-image">
      <img src="../assets/ProfilePicture.jpeg" alt="Image of Jacob Boardman" />
    </div>
  </header>
</template>

<script>
import { LogoutIcon, PencilPlusIcon } from "mdi-vue3";
export default {
  name: "HeaderBar",
  components: { LogoutIcon, PencilPlusIcon },
  data() {
    return {
      notBasePath: {
        "/": false,
        "/contact-page": true,
        "/breakfast-page": true,
        "/lunch-page": true,
        "/dinner-page": true,
        "/dessert-page": true
      }
    };
  },
  methods: {
    logout() {
      console.log("Logging out");
    },
    addRecipe() {
      console.log("Adding recipe");
    }
  }
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
  background-image: url("../assets/cooking-banner-gbcadeaf94_1920.jpg");
  background-size: cover;
}

.header > h1 {
  font-size: xxx-large;
  font-family: "Kite One", sans-serif !important;
}

.header-image {
  height: 100%;
  align-self: center;
  justify-self: flex-end;
  border-radius: 5px;
  border: rgb(56, 56, 56) 3px inset;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-left: 2px;
}

.header-image > img {
  height: 100%;
  aspect-ratio: 1/1;
}

.usermenu {
  height: 50%;
  background-color: #fdfce4;
}

.logout:hover {
  color: #adadab;
  size-adjust: 110%;
}
.addRecipe:hover {
  color: #adadab;
  size-adjust: 110%;
}
</style>
