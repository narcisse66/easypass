import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../view/dashboard/Dash.Master.vue";

Vue.use(Router);

const adminRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: adminRoutes,
});

export default router;
