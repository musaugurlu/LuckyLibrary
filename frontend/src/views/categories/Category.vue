<template>
    <div>
        <page-header />
        <breadcrumb :category="$route.params.category" />
        <book-list :category="$route.params.category" :books="books"/>
        <page-footer />
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import PageHeader from '@/components/viewparts/Header.vue'
import Breadcrumb from '@/components/categories/Breadcrumb.vue'
import BookList from '@/components/books/BookList.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

import Helper from '../../helper'

@Component({
    components: {
        PageHeader,
        Breadcrumb,
        BookList,
        PageFooter
    }
})
export default class Category extends Vue {
    private books: Array<object> = [];
    private api: Helper = new Helper();

    mounted() {
        this.fetchBooks();   
    }

    fetchBooks(): void {
        const api = new Helper();
        api.getBooksByCategory(this.$route.params.category).then(
            response => {
                this.books = response.data;
            }
        );
    }
}
</script>