<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 1:26:34 am
-->
<template>
    <div>
        <div class="hero__search__form">
            <form action="/books/search" method="GET">
                <input type="text" name="query" placeholder="Search...">
                <button type="submit">Search Now</button>
            </form>
        </div>
        <ul class="hero__categories__tags">
            <li v-for="(category, index) in slicedCategories" :key="index">
                <a :href="'/category/' + category.name.toLowerCase()">
                    <img src="/img/categories/category.png" alt=""> {{category.name}}
                </a>
            </li>
            <li v-if="categories.length > 0">
                <a href="/categories/"><img src="img/hero/cat-6.png" alt=""> All Categories</a>
            </li>
        </ul>
    </div>  
</template>
<script>
export default {
    props: [
        'categories'
    ],

    computed: {
        slicedCategories() {
            return this.categories && this.categories.length > 5 ? this.categories.slice(0,5) : this.categories;
        }
    },
}
</script>