import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import New from '../views/New.vue'
import { auth } from '@/config/firebase.js'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        alias: '/home',
        meta: {
            requiereAutenticacion: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/new',
        name: 'New',
        component: New
    },
    {
        path: '/about',
        name: 'About',

        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const valorRequiereAutenticacion = to.matched.some(route => route.meta.requiereAutenticacion)

    if (valorRequiereAutenticacion && !auth.currentUser) {
        next('login')
    } else {
        next()
    }

})

export default router
