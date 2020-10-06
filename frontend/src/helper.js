/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 07/03/2020 2:40:29 pm
 */
import axios from 'axios'
// import authHeader from './services/AuthHeader'

const backend_url = process.env.VUE_APP_API_BACKEND_URL;

class Helper {

    getSingleBook(id) {
        return axios.get(backend_url + "/book/" + id);
    }

    getAllBooks() {
        return axios.get(backend_url + "/books");
    }

    // public getCategories() {
    //     return axios.get(backend_url + "/categories");
    // }

    // public getNumOfBooks() {
    //     return axios.get(backend_url + "/books/numOfBooks");
    // }

    searchBook(word) {
        return axios.get(backend_url + "/books/search/" + word);
    }

    getBooksByCategory(category) {
        return axios.get(backend_url + "/books/byCategory/" + category);
    }

    // getNewBooks() {
    //     return axios.get(backend_url + "/books/newbooks");
    // }

    // getPopularBooks() {
    //     return axios.get(backend_url + "/books/popularbooks");
    // }

    findBooks(query) {
        return axios.get(backend_url + "/books/search?query=" + query);
    }

    getBranches() {
        return axios.get(backend_url + "/branches");
    }

    getBranch(id) {
        return axios.get(backend_url + "/branch/" + id);
    }

    // getMyBooks() {
    //     return axios.get(backend_url + "/my/books", { headers: authHeader() });
    // }
}

export default Helper;