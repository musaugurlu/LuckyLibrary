<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 2:46:01 am
-->
<template>
    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <search categories=""/>
                    
                    <div class="section-title">
                        <p>&nbsp;</p>
                        <h2>New Books</h2>
                        <p></p>
                    </div>
                    <book-list :books="newBooks" />

                    <div class="section-title">
                        <p>&nbsp;</p>
                        <h2>Popular Books</h2>
                        <p></p>
                    </div>
                    <book-list :books="popularBooks" />
                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->
</template>

<script>
import BookList from './BookList.vue'
import Search from '@/components/viewparts/Search.vue'
// import { bookService } from '../../services/bookService'

export default {
    components: {
        BookList,
        Search
    },
    
    mounted() {
        this.$store.dispatch('books/getNewBooks');
        this.$store.dispatch('books/getPopularBooks');
    },

    computed: {
        popularBooks() {
            return this.$store.state.books.popularBooks;
        },

        newBooks() {
            return this.$store.state.books.newBooks;
        } 
    },
}
</script>