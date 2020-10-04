/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 09/20/2020 1:17:35 pm
 */
export function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token }
    }

    return {};
}