import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Contact from "@/components/ContactPage.vue";
import Breakfast from "@/components/BreakfastPage.vue"
import Lunch from "@/components/LunchPage.vue"
import Dinner from "@/components/DinnerPage.vue"
import Dessert from "@/components/DessertPage.vue"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/contact-page",
    name: "ContactPage",
    component: Contact,
  },
  {
    path: "/breakfast-page",
    name: "BreakfastPage",
    component: Breakfast
  },
  {
    path: "/lunch-page",
    name: "LunchPage",
    component: Lunch
  },
  {
    path: "/dinner-page",
    name: "DinnerPage",
    component: Dinner
  },
  {
    path: "/dessert-page",
    name: "DessertPage",
    component: Dessert
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;