<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:09:14 am
-->
<template>
    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <p> </p>
                        <h2>Categories</h2>
                    </div>
                    <div class="categories__item__list">
                        <a v-for="(category, index) in categories" :key="index" :href="'/category/' + category.name.toLowerCase()">
                            <div class="categories__item">
                                <img src="/img/categories/categories.png" alt="">
                                <!-- <img :src="'/img/categories/' + category.img" alt=""> -->
                                <h5>{{category.name}}</h5>
                                <span>{{category.bcount}} Books</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->
</template>

<script>

export default {
    mounted() {
        this.$store.dispatch('books/getCategories');
    },

    computed: {
        categories() {
            return this.$store.state.books.categories;
        }
    },
}
</script>