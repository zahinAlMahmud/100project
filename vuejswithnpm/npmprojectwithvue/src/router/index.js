import { createRouter , createWebHistory} from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Contact from '../view/Contact.vue'
import Blog from '../view/Blog.vue'

const routes = [
    {path:'/',name:'Home',component:Home},
    {path:'/about',name:'About',component:About},
    {path:'/contact',name:'Contact',component:Contact},
    {path:'/blog',name:'Blog',component:Blog},
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router