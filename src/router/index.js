import Vue from 'vue'
import Router from 'vue-router'
import {createRoute} from "vue-router/src/util/route";

Vue.use(Router);

const HomeView = () => import('../views/HomeView.vue');
const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },

];

const router = createRoute({
    routes,
});

export default router;
