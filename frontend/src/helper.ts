/*
 * Copyright (c) 2020 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 07/03/2020 2:40:29 pm
 */
import axios from 'axios'

export default class Helper {
    private backend_url = "http://localhost:8090"

    public getSingleBook(id: string) {
        return axios.get(this.backend_url + "/book/" + id);
    }

    public getAllBooks() {
        return axios.get(this.backend_url + "/books");
    }

    public getCategories() {
        return axios.get(this.backend_url + "/categories");
    }

    public getNumOfBooks() {
        return axios.get(this.backend_url + "/books/numOfBooks");
    }

    public searchBook(word: string) {
        return axios.get(this.backend_url + "/books/search/" + word);
    }

    public getBooksByCategory(category: string) {
        return axios.get(this.backend_url + "/books/byCategory/" + category);
    }

    public getNewBooks() {
        return axios.get(this.backend_url + "/books/newbooks");
    }

    public getPopularBooks() {
        return axios.get(this.backend_url + "/books/popularbooks");
    }

    public findBooks(query: string) {
        return axios.get(this.backend_url + "/books/search?query=" + query);
    }

    public getBranches() {
        return axios.get(this.backend_url + "/branches");
    }

    public getBranch(id: number) {
        return axios.get(this.backend_url + "/branch/" + id);
    }
}