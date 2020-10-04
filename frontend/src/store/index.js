import Vue from 'vue'
import Vuex from 'vuex'
import { alert } from './modules/alert.module'
import { auth } from './modules/auth.module'
import { books } from './modules/books.module'
import { users } from './modules/user.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        alert,
        auth,
        books,
        users
    },
})