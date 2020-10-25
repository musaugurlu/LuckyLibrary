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
        async getCategories({ dispatch, commit }) {
            try {
                const response = await axios.get(`${backendUrl}/categories`);
                commit("setCategories", response.data);
            } catch (e) {
                if (e.response.status === 401) {
                    dispatch("auth/logout", {}, { root: true });
                    dispatch("alert/error", "Token Expired. Please log back in and refresh the page.", { root: true });
                }
            }
        },

        async getNumOfBooks({ dispatch, commit }) {
            try {
                const response = await axios.get(`${backendUrl}/books/numOfBooks`);
                commit("setNumOfBooks", response.data);
            } catch (e) {
                if (e.response.status === 401) {
                    dispatch("auth/logout", {}, { root: true });
                    dispatch("alert/error", "Token Expired. Please log back in and refresh the page.", { root: true });
                }
            }
        },

        async getNewBooks({ dispatch, commit }) {
            try {
                const response = await axios.get(`${backendUrl}/books/newbooks`);
                commit("setNewBooks", response.data);
            } catch (e) {
                if (e.response.status === 401) {
                    dispatch("auth/logout", {}, { root: true });
                    dispatch("alert/error", "Token Expired. Please log back in and refresh the page.", { root: true });
                }
            }
        },

        async getPopularBooks({ dispatch, commit }) {
            try {
                const response = await axios.get(`${backendUrl}/books/popularbooks`);
                commit("setPopularBooks", response.data);
            } catch (e) {
                if (e.response.status === 401) {
                    dispatch("auth/logout", {}, { root: true });
                    dispatch("alert/error", "Token Expired. Please log back in and refresh the page.", { root: true });
                }
            }
        },
    }
}