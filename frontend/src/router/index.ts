import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/categories/Index.vue'
import Category from '../views/categories/Category.vue'
import Book from '../views/books/Book.vue'
import Books from '../views/books/Index.vue'
import Search from '../views/books/Search.vue'
import Branch from '../views/branches/Branch.vue'
import Branches from '../views/branches/Index.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/book/:book',
    name: 'Book',
    component: Book
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/branch/:id',
    name: 'Branch',
    component: Branch
  },
  {
    path: '/branches',
    name: 'Branches',
    component: Branches
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active',
})

export default router
