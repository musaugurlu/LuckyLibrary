/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 09/20/2020 1:27:49 pm
 */

import axios from 'axios'
import { authHeader } from './authHeader'

const backend_url = process.env.VUE_APP_API_BASE_URL;

export const userService = {
    login,
    logout,
    getAll
};

function login(email, password) {
    const requestBody = {
        'email': email,
        'password': password
    }
    return axios.post(`${backend_url}/auth/login`, requestBody)
        // .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${backend_url}/books/numOfBooks`, requestOptions).then(handleResponse);
}