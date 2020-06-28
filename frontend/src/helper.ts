import axios from 'axios'

export default class Helper {
    private backend_url = "http://localhost:8090"

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
}