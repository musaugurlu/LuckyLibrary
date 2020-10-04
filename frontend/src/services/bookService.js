/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 10/03/2020 10:16:45 pm
 */

import axios from 'axios'

const backend_url = process.env.VUE_APP_API_BASE_URL;

export const bookService = {
    getNewBooks,
}

function getNewBooks() {
    axios.get(`${backend_url}/books/newbooks`)
        .then(res => {
            return res.data;
        })
}