import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'
import Home from "../views/Home.vue";
import Categories from "../views/categories/Index.vue";
import Category from "../views/categories/Category.vue";
import Book from "../views/books/Book.vue";
import Books from "../views/books/Index.vue";
import Search from "../views/books/Search.vue";
import Branch from "../views/branches/Branch.vue";
import Branches from "../views/branches/Index.vue";
import Login from "../views/auth/Login.vue";
import Logout from "../views/auth/Logout.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/category/:category",
        name: "Category",
        component: Category
    },
    {
        path: "/categories",
        name: "Categories",
        component: Categories
    },
    {
        path: "/book/:book",
        name: "Book",
        component: Book
    },
    {
        path: "/books",
        name: "Books",
        component: Books,
    },
    {
        path: "/books/search",
        name: "Search",
        component: Search
    },
    {
        path: "/branch/:id",
        name: "Branch",
        component: Branch
    },
    {
        path: "/branches",
        name: "Branches",
        component: Branches
    },
    {
        path: "/auth/login",
        name: "login",
        component: Login
    },
    {
        path: "/auth/logout",
        name: "logout",
        component: Logout
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkExactActiveClass: "active",
    linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isLoggedIn']) {
            next();
            return;
        }
        next("auth/login");
    } else {
        next();
    }
});

export default router;