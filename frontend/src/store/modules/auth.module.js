/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 10/05/2020 11:48:29 pm
 */

import axios from "axios"
import { authService } from "../../services/authService";



export const auth = {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                authService.login(user)
                    .then(response => {
                        const token = response.data.token;
                        const user = response.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                        commit('auth_success', token, user);
                        resolve(response);
                    }).catch(error => {
                        commit('auth_error');
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },

        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
}