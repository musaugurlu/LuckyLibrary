/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 09/20/2020 2:50:22 pm
 */

import { userService } from '../../services/userService';

export const users = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}