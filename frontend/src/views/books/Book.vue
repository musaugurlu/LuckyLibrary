<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:35:16 pm
-->
<template>
    <div>
        <page-header />
        <page-hero :book="book" :category="category.name" />
        <page-book :book="book" :branch="branch" />
        <page-footer />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import PageHeader from '@/components/viewparts/Header.vue'
import PageFooter from '@/components/viewparts/Footer.vue'
import PageHero from '@/components/books/Hero.vue'
import PageBook from '@/components/books/Book.vue'
import Helper from '../../helper'

@Component({
    components: {
        PageHeader,
        PageHero,
        PageBook,
        PageFooter
    }
})
export default class Book extends Vue {
    private api: Helper = new Helper();
    
    private book: Array<object> = [];
    private category: Array<object> = [];
    private branch: Array<object> = [];

    mounted() {
        this.fetchBooks();   
    }

    private fetchBooks(): void {
        const api = new Helper();
        api.getSingleBook(this.$route.params.book).then(
            response => {
                this.book = response.data;
                this.category = response.data.category;
                this.branch = response.data.branch;
            }
        );
    }
}
</script>