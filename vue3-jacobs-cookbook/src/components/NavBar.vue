<template>
  <div class="d-flex flex-column flex-wrap justify-end align-start navbar">
    <div
      v-for="link in links"
      :key="link.title"
      class="navItemContainer d-flex flex-column"
    >
      <router-link :to="link.route" class="navItem" @click="scrollToTop">
        {{ link.title }}
      </router-link>
      <v-expand-transition>
        <div
          v-if="recipes.route === link.route"
          class="subNavContainter justify-end"
        >
          <a
            v-for="name in recipes.names"
            :key="name"
            :href="'#' + name"
            :class="`subNavItem ${
              this.$route.hash === '#' + name ? 'activeSubNav' : ''
            }`"
            :onclick="scrollToElement(name)"
            @click="scrollToElement(name)"
          >
            {{ name }}</a
          >
        </div>
      </v-expand-transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recipes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      links: [
        { route: "/", title: "About Me" },
        { route: "/breakfast-page", title: "Breakfast" },
        { route: "/lunch-page", title: "Lunch" },
        { route: "/dinner-page", title: "Dinner" },
        { route: "/dessert-page", title: "Desserts" },
        { route: "/contact-page", title: "Contact Me" },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollToElement(name) {
      const element = document.getElementById(name);
      console.log(element.scrollTop - 110);
      window.scrollTo({
        top: element.scrollTop - 110,
        behaviour: "smooth",
      });
    },
  },
  mounted() {},
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
  width: 100%;
  padding: 10px;
}

.navItemContainer > .navItem {
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  background: #e3bbf354;
  box-shadow: 7px 7px 7px #d9d9d9, -7px -7px 7px #ffffff;
  transition: 0.5s;
  color: #000000;
  text-decoration: none;
  text-align: center;
  padding: 10px;
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
  align-content: end;
  color: #000000;
  text-decoration: none;
  text-align: center;
  margin-left: 30px;
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
  /* width: 80%; */
}

.navItem > a {
  color: #000000;
  text-decoration: none;
}

.navItem > a:visited {
  color: #000000;
  text-decoration: none;
}

.navItemContainer > .router-link-active,
.activeSubNav {
  color: #000000;
  background: #e3bbf354;
  border-top-left-radius: 14px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 0px;
  box-shadow: inset 7px 7px 7px #c19fcf54, inset -7px -7px 7px #ffd7ff54;
  width: 120%;
  z-index: 10000;
}

.subNavContainter > .subNavItem:hover {
  color: #000000;
  background: #e3bbf354;
  border-radius: 14px;
  box-shadow: inset 7px 7px 7px #c19fcf54, inset -7px -7px 7px #ffd7ff54;
}
</style>
