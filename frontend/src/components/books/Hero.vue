<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 2:54:17 am
-->
<template>
    <!-- Listing Section Begin -->
    <section class="listing-hero set-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="listing__hero__option">
                        <div class="listing__hero__icon">
                            <img :src="book.imgUrl" alt="">
                        </div>
                        <div class="listing__hero__text">
                            <h2>{{book.title}}</h2>
                            <div class="listing__hero__widget">
                                <div class="listing__hero__widget__rating">
                                    <i class="fa fa-tag" aria-hidden="true"></i> {{category}}
                                </div>
                                <div>{{book.view}} View</div>
                            </div>
                            <p><i class="fa fa-pencil" aria-hidden="true"></i> {{book.author}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="listing__hero__btns">
                        <a href="#" class="primary-btn share-btn"><i class="fa fa-mail-reply"></i> Hold</a>
                        <a @click="checkOutBook()" href="#" class="primary-btn"><i class="fa fa-bookmark"></i> Check Out</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Listing Section End -->
</template>

<script>
export default {
    props: [ 'book', 'category' ],

    methods: {
        checkOutBook() {
            this.$store.dispatch('users/getAll');
        }
    },
}
</script>

<style scoped>
    .set-bg {
        background-image: url('../../assets/img/hero/library-bg.jpg');
    }
</style>