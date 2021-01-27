import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login"
import Home from "@/views/Home";
import Add from "@/views/Add";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import("../views/List")
      },
      {
        path: 'user',
        name: 'User',
        component: () => import("../views/User")
      }
    ]
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
