import VueRouter from 'vue-router'
import Home from './components/Favorites'
import Load from './components/ValuteLoad'
import About from './components/About'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/load',
            component: Load
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})