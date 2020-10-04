<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 1:20:53 am
-->
<template>
    <!-- Hero Section Begin -->
    <section class="hero set-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero__text">
                        <div class="section-title">
                            <h2>Discover The Best Books Near You</h2>
                            <!-- <p>1.118.940.376 The best book is waiting for you</p> -->
                            <p>{{ numOfBooks }} The best book is waiting for you</p>
                        </div>
                        <search :categories="categories"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
</template>

<script>
import Search from '@/components/viewparts/Search.vue'
// import { mapActions } from 'vuex'

export default {
    components: {
        Search
    },

    methods: {
        
    },

    mounted() {
        this.$store.dispatch('books/getNumOfBooks');
        this.$store.dispatch('books/getCategories');
    },

    computed: {
        categories() {
            return this.$store.state.books.categories;
        },

        numOfBooks() {
            return this.$store.state.books.numOfBooks;
        }
    },
}
</script>

<style scoped>
    .set-bg {
        background-image: url('../../assets/img/hero/library-bg.jpg');
    }
</style>