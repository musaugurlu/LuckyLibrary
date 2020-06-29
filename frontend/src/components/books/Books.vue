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

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Helper from '../../helper'
import BookList from './BookList.vue'
import Search from '@/components/viewparts/Search.vue'

@Component({
    components: {
        BookList,
        Search
    }
})
export default class Books extends Vue { 
    private api: Helper = new Helper();
    private newBooks: Array<object> = []
    private popularBooks: Array<object> = []

    private fetchBooks(): void {
        this.api.getNewBooks().then(repsonse => {
            this.newBooks = repsonse.data;
        });

        this.api.getPopularBooks().then(repsonse => {
            this.popularBooks = repsonse.data;
        })
    }
    mounted() {
     this.fetchBooks();   
    }
}

</script>