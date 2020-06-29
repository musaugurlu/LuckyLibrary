<template>
    <div>
        <page-header />
        <breadcrumb :bookName="book.title" />
        <!-- <book-list :category="$route.params.category" :books="books"/> -->
        <div class="section-title">
                        <h2>{{ book.title }}</h2>
                        <p></p>
                    </div>
        <single-book
            :id="book.id"
            :img="book.imgUrl"
            :title="book.title"
            :author="book.author"
            :publishedDate="book.publishedDate"
            :category="category.name"
        />
        <page-footer />
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import PageHeader from '@/components/viewparts/Header.vue'
import Breadcrumb from '@/components/books/Breadcrumb.vue'
import PageFooter from '@/components/viewparts/Footer.vue'
import SingleBook from '@/components/books/SingleBook.vue'
import Helper from '../../helper'

@Component({
    components: {
        PageHeader,
        Breadcrumb,
        SingleBook,
        PageFooter
    }
})
export default class Book extends Vue {
    private api: Helper = new Helper();
    
    private book: Array<object> = [];
    private category: Array<object> = [];

    mounted() {
        this.fetchBooks();   
    }

    private fetchBooks(): void {
        const api = new Helper();
        api.getSingleBook(this.$route.params.book).then(
            response => {
                this.book = response.data;
                this.category = response.data.category;
            }
        );
    }
}
</script>