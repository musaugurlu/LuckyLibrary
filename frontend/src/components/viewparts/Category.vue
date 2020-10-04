<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 1:30:29 am
-->
<template>
    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Most Popular Categories</h2>
                        <p>World of Book for Young and Old</p>
                    </div>
                    <div class="categories__item__list">
                        <div class="categories__item" v-for="(category, index) in categories" :key="index">
                            <a :href="'/category/' + category.name.toLowerCase()">
                                <img src="/img/categories/categories.png" alt="">
                                <h5>{{category.name}}</h5>
                                <span>{{category.bcount}} Books</span>
                            </a>
                        </div>
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
            const categories = this.$store.state.books.categories;
            return categories && categories.length > 5 ? categories.slice(0,5) : categories;
        }
    },
}
</script>