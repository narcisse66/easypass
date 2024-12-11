import AppBlog from "@/view/pages/AppBlog.vue";
import AppBuyTicket from "@/view/pages/AppBuyTicket.vue";
import AppDetailsEvent from "@/view/pages/AppDetailsEvent.vue";
import AppDetailsEvent2 from "@/view/pages/AppDetailsEvent2.vue";
import AppDetailsEvent3 from "@/view/pages/AppDetailsEvent3.vue";
import AppDetailsEvent4 from "@/view/pages/AppDetailsEvent4.vue";
import AppDetailsEventDyn from "@/view/pages/AppDetailsEventDyn.vue";
import Explorer from "@/view/pages/AppExplorer.vue";
import AppHome from "@/view/pages/AppHome.vue";
import AppValiderPay from "@/view/pages/AppValiderPay.vue";
import AppViewTicket from "@/view/pages/AppViewTicket.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {  
    path: "/explorer",
    name: "explorer",
    component: Explorer,
  },
  {
    path: "/blog",
    name: "blog",
    component: AppBlog,
  },
  {
    path: "/detail/event",
    name: "details-event",
    component: AppDetailsEvent, // Lazy loading
    // props: true, // Pass route params as props to the component
  }
  ,
  {
    path: "/detail/event2",
    name: "details-event2",
    component: AppDetailsEvent2, // Lazy loading
    // props: true, // Pass route params as props to the component
  },
  {
    path: "/detail/event3",
    name: "details-event3",
    component: AppDetailsEvent3, // Lazy loading
    // props: true, // Pass route params as props to the component
  },
  {
    path: "/detail/event4",
    name: "details-event4",
    component: AppDetailsEvent4, // Lazy loading
    // props: true, // Pass route params as props to the component
  },
  {
    path: "/detail/ticket",
    name: "ticket-details",
    component: AppBuyTicket,
    // props: true, // Pass route params as props to the component
  },
  {
    path: "/detail/valider/pay",
    name: "valider-pay",
    component: AppValiderPay,
    // props: true, // Pass route params as props to the component
  },
  {
    path: "/detail/ticket/buy",
    name: "detail-ticket",
    component: AppViewTicket,
    // props: true, // Pass route params as props to the component
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: AppDetailsEventDyn,
    props: true,
  },
];

// Créez l'instance du routeur
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
