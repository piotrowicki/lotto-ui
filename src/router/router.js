import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        redirect: "/lotto"
    },
    {
        path: "/lotto",
        name: "Home",
        component: Home,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = 'Lotto | ' + to.name;
    next();
});

export default router;