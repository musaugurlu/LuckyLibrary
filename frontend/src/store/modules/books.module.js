/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 09/20/2020 2:40:11 pm
 */

import axios from 'axios'
// import { bookService } from '../../services/userService';

const backendUrl = process.env.VUE_APP_API_BACKEND_URL;

export const books = {
    namespaced: true,
    state: {
        categories: [],
        newBooks: [],
        popularBooks: [],
        numOfBooks: 0,
        lastCatSyncTime: 0,
        lastNoBSyncTime: 0
    },
    mutations: {
        setCategories: (state, categories) => state.categories = categories,
        setNewBooks: (state, newBooks) => state.newBooks = newBooks,
        setPopularBooks: (state, popularBooks) => state.popularBooks = popularBooks,
        setNumOfBooks: (state, num) => state.numOfBooks = num,
    },
    actions: {
        async getCategories({ commit }) {
            const response = await axios.get(`${backendUrl}/categories`);
            commit("setCategories", response.data);
        },

        async getNumOfBooks({ commit }) {
            const response = await axios.get(`${backendUrl}/books/numOfBooks`);
            commit("setNumOfBooks", response.data);
        },

        async getNewBooks({ commit }) {
            const response = await axios.get(`${backendUrl}/books/newbooks`);
            commit("setNewBooks", response.data);
        },

        async getPopularBooks({ commit }) {
            const response = await axios.get(`${backendUrl}/books/popularbooks`);
            commit("setPopularBooks", response.data);
        },
    }
}