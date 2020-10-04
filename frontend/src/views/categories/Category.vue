<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:22:23 am
-->
<template>
    <div>
        <page-header />
        <breadcrumb :category="$route.params.category" />
        <book-list :category="$route.params.category" :books="books"/>
        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/viewparts/Header.vue'
import Breadcrumb from '@/components/categories/Breadcrumb.vue'
import BookList from '@/components/books/BookList.vue'
import PageFooter from '@/components/viewparts/Footer.vue'
import Helper from '../../helper'

const helper = new Helper();

export default {
    components: {
        PageHeader,
        Breadcrumb,
        BookList,
        PageFooter
    },

    data() {
        return {
            books: []
        }
    },

    methods: {
        fetchBooks() {
            helper.getBooksByCategory(this.$route.params.category).then(
                response => {
                    this.books = response.data;
                }
            );
        }
    },

    mounted() {
        this.fetchBooks();
    },
}
</script>