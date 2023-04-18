import * as VueRouter from 'vue-router';
import LoginPage from '../pages/auth/LoginPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'


const routes = [
    { path: '/', component: LoginPage },
    { path: '/register', component: RegisterPage },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})




export default router;