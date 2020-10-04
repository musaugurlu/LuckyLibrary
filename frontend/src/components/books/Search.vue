<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 2:55:47 am
-->
<template>
    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <page-search categories=""/>
                    
                    <div class="section-title">
                        <p>&nbsp;</p>
                        <h2>Search for: {{$route.query.query}}</h2>
                        <p></p>
                    </div>
                    <book-list :books="books" v-if="books.length > 0" />
                    <p v-else>No books found. Try to search with less words.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->
</template>

<script>
import Helper from '../../helper'
import BookList from './BookList.vue'
import PageSearch from '@/components/viewparts/Search.vue'

const api = new Helper();

export default {
    components: {
        BookList,
        PageSearch
    },

    data() {
        return {
            books: []
        }
    },

    methods: {
        fetchBooks() {
            api.findBooks(this.$route.query.query).then(repsonse => {
                this.books = repsonse.data;
            });
        }
    },

    mounted() {
        this.fetchBooks();
    },
}
</script>