<template>
  <div class="d-flex flex-column flex-wrap justify-end align-start mb-2 navbar">
    <div v-for="link in links" :key="link.title" class="navItemContainer d-flex flex-column">
      <router-link :to="link.route" class="navItem">
        {{ link.title }}
      </router-link>
      <div v-show="recipeNames[0].route === link.route" class="subNavContainter">
        <a v-for="name in recipeNames[0].names" :key="name" :href="'#' + name" class="subNavItem">
          {{ name }}</a>
      </div>
    </div>
    <!-- <router-link class="navItem" to="/">About Me</router-link>
    <router-link class="navItem" to="/breakfast-page">Breakfast</router-link>
    <router-link class="navItem" to="/lunch-page">Lunch</router-link>
    <router-link class="navItem" to="/dinner-page">Dinner</router-link>
    <router-link class="navItem" to="/dessert-page">Desserts</router-link>
    <router-link class="navItem" to="/contact-page">Contact Me</router-link> -->
  </div>
</template>
<script>
import { onMounted } from 'vue';
onMounted(() => {
  console.log('NavBar logs>>>>')
  console.log(this.recipeNames);
})
export default {
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      links: [
        { route: '/', title: 'About Me' },
        { route: '/breakfast-page', title: 'Breakfast' },
        { route: '/lunch-page', title: 'Lunch' },
        { route: '/dinner-page', title: 'Dinner' },
        { route: '/dessert-page', title: 'Desserts' },
        { route: '/contact-page', title: 'Contact Me' }
      ],
      recipeNames: this.recipes
    };
  },
  methods: {
    checkTrue(route1, route2) {
      console.log({ route1 });
      console.log({ route2 });
      console.log(route1 === route2);
    }
  }
};
</script>
<style scoped>
.navbar {
  background: #ffffff;
}

.navItemContainer {
  color: #000000;
  text-decoration: none;
  text-align: center;
  width: 80%;
}

.navItemContainer>.navItem {
  border-radius: 14px;
  background: #e3bbf354;
  box-shadow: 7px 7px 7px #d9d9d9, -7px -7px 7px #ffffff;
  transition: 0.5s;
  color: #000000;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 15px;
  width: 100%;
}

.navItem:hover {
  transition: 0.5s;
  color: #000000;
  background: #e3bbf354;
  border-radius: 14px;
  box-shadow: inset 7px 7px 7px #c19fcf54, inset -7px -7px 7px #ffd7ff54;
}

.subNavContainter {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: end;
  color: #000000;
  text-decoration: none;
  text-align: center;
  margin-left: auto;
}

.subNavItem {
  font-size: small;
  border-radius: 14px;
  background: #e3bbf354;
  box-shadow: 7px 7px 7px #d9d9d9, -7px -7px 7px #ffffff;
  transition: 0.5s;
  color: #000000;
  text-decoration: none;
  text-align: center;
  padding: 8px;
  margin: 10px;
  width: 80%
}

.navItem>a {
  color: #000000;
  text-decoration: none;
}

.navItem>a:visited {
  color: #000000;
  text-decoration: none;
}

.navItemContainer>.router-link-active {
  color: #000000;
  background: #e3bbf354;
  border-radius: 14px;
  box-shadow: inset 7px 7px 7px #c19fcf54, inset -7px -7px 7px #ffd7ff54;
}
</style>
