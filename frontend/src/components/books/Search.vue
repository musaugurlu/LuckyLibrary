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
                    <book-list :books="books" />

                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Helper from '../../helper'
import BookList from './BookList.vue'
import PageSearch from '@/components/viewparts/Search.vue'

@Component({
    components: {
        BookList,
        PageSearch
    }
})
export default class Search extends Vue { 
    private api: Helper = new Helper();
    private books: Array<object> = []

    private fetchBooks(): void {
        this.api.findBooks(this.$route.query.query as string).then(repsonse => {
            this.books = repsonse.data;
        });
    }
    mounted() {
     this.fetchBooks();   
    }
}

</script>