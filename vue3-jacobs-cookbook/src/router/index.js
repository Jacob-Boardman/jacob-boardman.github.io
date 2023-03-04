import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Contact from "@/components/ContactPage.vue";
import Breakfast from "@/components/BreakfastPage"

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;