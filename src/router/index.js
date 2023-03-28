import { createRouter, createWebHashHistory, } from "vue-router"; 
const routes = [
    // {
        // path: "/organisme",
        // name: "organisme",
        // component: organisme,}
    // {
    //     path: "/",
    //     redirect: "/accueil",
    // },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});
export default router;