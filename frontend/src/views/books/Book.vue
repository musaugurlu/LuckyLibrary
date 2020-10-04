<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:15:37 am
-->
<template>
    <div>
        <page-header />
        <page-hero :book="book" :category="category.name" />
        <page-book :book="book" :branch="branch" />
        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/viewparts/Header.vue'
import PageFooter from '@/components/viewparts/Footer.vue'
import PageHero from '@/components/books/Hero.vue'
import PageBook from '@/components/books/Book.vue'
import Helper from '../../helper'

const api = new Helper();

export default {
    components: {
        PageHeader,
        PageHero,
        PageBook,
        PageFooter
    },

    data() {
        return {
            book: [],
            category: [],
            branch: []
        }
    },

    methods: {
        fetchBooks() {
            api.getSingleBook(this.$route.params.book).then(
                response => {
                    this.book = response.data;
                    this.category = response.data.category;
                    this.branch = response.data.branch;
                }
            );
        }
    },

    mounted() {
        this.fetchBooks();
    },

}
</script>