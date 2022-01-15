import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import FavoritedPage from "@/views/FavoritedPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favorited",
    name: "FavoritedPage",
    component: FavoritedPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
