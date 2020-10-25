/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 09/20/2020 2:36:50 pm
 */

export const alert = {
    namespaced: true,
    state: {
        show: false,
        title: '',
        type: '',
        message: ''
    },
    actions: {
        error({ commit }, message) {
            commit('showAlert', {
                title: 'Error',
                type: 'error',
                message: message
            })
        },
        success({ commit }, message) {
            commit('showAlert', {
                title: 'Success',
                type: 'success',
                message: message
            })
        },
        warning({ commit }, message) {
            commit('showAlert', {
                title: 'Warning',
                type: 'warning',
                message: message
            })
        },
        info({ commit }, message) {
            commit('showAlert', {
                title: 'Information',
                type: 'info',
                message: message
            })
        },
        alert({ commit }, message) {
            commit('showAlert', {
                title: 'Notification',
                type: 'alert',
                message: message
            })
        }

    },
    mutations: {
        showAlert(state, { title, type, message }) {
            state.show = true
            state.title = title
            state.type = type
            state.message = message
        },
        hideAlert(state) {
            state.show = false
            state.title = null
            state.type = null
            state.message = null
        }
    }
}