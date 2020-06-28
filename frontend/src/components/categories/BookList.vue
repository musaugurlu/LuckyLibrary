<template>
    <section class="blog-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <single-book v-for="book in displayedBooks" :key="book.id"
                            :id="book.id"
                            :img="book.imgUrl"
                            :title="book.title"
                            :author="book.author"
                            :publishedDate="book.publishedDate"
                        />
                    </div>
                    <div class="blog__pagination">
                        <button @click.prevent="goPrev" :disabled="prevDisabled"><i class="fa fa-long-arrow-left"></i> Pre</button>
                        <button v-for="buttonPage in pages" :key="buttonPage" @click.prevent="setPage(buttonPage)" :disabled="buttonPage == page">{{buttonPage}}</button>
                        <!-- <a href="#">2</a>
                        <a href="#">3</a> -->
                        <button @click.prevent="goNext" :disabled="nextDisabled">Next <i class="fa fa-long-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
import Helper from '../../helper'
import SingleBook from './Book.vue'

// interface Book {
//     id: string;
//     title: string;
//     author: string;
//     imgUrl: string;
//     publishedDate: string;
// }

@Component({
    components: {
        SingleBook
    }
})
export default class BookList extends Vue {
    @Prop() private category!: string;
    private books: Array<object> = [];
    private api: Helper = new Helper();
    
    private pages: Array<number> = [];
    private page                 = 1;
    private perPage              = 12;
    private pageBooks: Array<object> = [];

    mounted() {
        this.fetchBooks();
     }

    goPrev() {
        if(this.page > 1) {
            this.page--;
        }
    }

    goNext() {
        if(this.page < this.pages.length) {
            this.page++;
        }
    }

    fetchBooks(): void {
        const api = new Helper();
        api.getBooksByCategory(this.category).then(
            response => {
                this.books = response.data;
                this.pageBooks = response.data;
            }
        );
    }

    setPage(page: number): void {
        this.page = page;
    }

    setPages() {
        const numOfPages = Math.ceil(this.books.length / this.perPage);
        for (let index = 0; index < numOfPages; index++) {
            this.pages.push(index + 1); 
        }
    }

    // Credit: https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b
    paginate (books: Array<object>) {
        const page = this.page;
        const perPage = this.perPage;
        const from = (page * perPage) - perPage;
        const to = (page * perPage);
        return  books.slice(from, to);
    }

    @Watch('books')
    booksChanged() {
        this.setPages();
    }

    get displayedBooks(): Array<object> {
        return this.paginate(this.pageBooks);
    }

    get prevDisabled(): boolean {
        return this.page <= 1;
    }

    get nextDisabled(): boolean {
        return this.page >= this.pages.length;
    }

}
</script>
