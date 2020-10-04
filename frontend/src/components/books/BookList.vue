<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 2:36:44 am
-->
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
                            :category="book.category.name"
                        />
                    </div>
                    <div class="blog__pagination" v-if="pages.length > 1">
                        <button v-if="page > 3" @click.prevent="page = 1"><i class="fa fa-angle-double-left"></i> </button>
                        <button @click.prevent="goPrev" :disabled="page <= 1"><i class="fa fa-long-arrow-left"></i> Pre</button>
                        <button disabled="disabled" v-if="page > 3">...</button>
                        <button v-for="buttonPage in pageNums" :key="buttonPage" @click.prevent="setPage(buttonPage)" :disabled="buttonPage == page">{{buttonPage}}</button>
                        <button disabled="disabled" v-if="page < pages.length - 2">...</button>
                        <button @click.prevent="goNext" :disabled="page >= pages.length">Next <i class="fa fa-long-arrow-right"></i></button>
                        <button v-if="page < pages.length - 2" @click="page = pages.length"><i class="fa fa-angle-double-right"></i> </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SingleBook from './SingleBook.vue'

export default {
    components: {
        SingleBook
    },
    
    props: [ 'books' ],
    
    data() {
        return {
            pages : [],
            page: 1,
            perPage: 12
        }
    },
    
    methods: {
        goPrev() {
            if(this.page > 1) {
                this.page--;
            }
        },

        goNext() {
            if(this.page < this.pages.length) {
                this.page++;
            }
        },

        setPage(page) {
            this.page = page;
        },

        setPages() {
            const numOfPages = Math.ceil(this.pageBooks.length / this.perPage);
            for (let index = 0; index < numOfPages; index++) {
                this.pages.push(index + 1); 
            }
        },

        // Credit: https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b
        paginate (pBooks) {
            const page = this.page;
            const perPage = this.perPage;
            const from = (page * perPage) - perPage;
            const to = (page * perPage);
            return pBooks && pBooks.length > 0 ? pBooks.slice(from, to) : pBooks;
        }
    },

    watch: {
        books() {
            this.setPages();
        }
    },

    computed: {
        pageBooks() {
            return this.books;
        },

        displayedBooks() {
            return this.paginate(this.pageBooks);
        },

        pageNums() {
            const start = this.page > 3 ? this.page - 3 : 0;
            const end = this.page < this.pages.length - 2 ? this.page + 2 : this.pages.length;      
            return this.pages.slice(start, end);
        }
    }
}
</script>