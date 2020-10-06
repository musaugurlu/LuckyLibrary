/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 10/06/2020 1:05:06 am
 */

import axios from "axios"

const backend_url = process.env.VUE_APP_API_BACKEND_URL;

export const authService = {
    login,
    logout
}

function login(userData) {
    return axios({
        url: `${backend_url}/auth/login`,
        data: userData,
        method: 'POST'
    });
}

function logout() {
    return axios({
        url: `${backend_url}/auth/logout`,
        data: {},
        method: 'POST'
    });
}