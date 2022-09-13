import { createWebHashHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import ResultTable from "@/views/ResultTable.vue";

const routes = [
    {
        path: "/",
        redirect: "/lotto/stats"
    },
    {
        path: "/lotto/stats",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/lotto/results",
        name: "Results",
        component: ResultTable,
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: "Not Found",
    //     component: NotFound,
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = 'Lotto | ' + to.name;
    next();
});

export default router;