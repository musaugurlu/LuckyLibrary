<template>
    <div>
        <div class="hero__search__form">
            <form action="/books/search" method="GET">
                <input type="text" name="query" placeholder="Search...">
                <button type="submit">Search Now</button>
            </form>
        </div>
        <ul class="hero__categories__tags">
            <li v-for="(category, index) in categories.slice(0,5)" :key="index">
                <!-- <a :href="'/category/' + category.name.toLowerCase()"><img :src="'img/hero/' + category.img" alt=""> {{category.name}}</a> -->
                <a :href="'/category/' + category.name.toLowerCase()"><img src="/img/categories/category.png" alt=""> {{category.name}}</a>
            </li>
            <li v-if="categories.length > 0">
                <a href="/categories/"><img src="img/hero/cat-6.png" alt=""> All Categories</a>
            </li>
        </ul>
    </div>  
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class Search extends Vue {
    @Prop() private categories!: Array<object>;
}
</script>