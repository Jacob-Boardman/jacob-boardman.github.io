import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Contact from "@/components/ContactPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;