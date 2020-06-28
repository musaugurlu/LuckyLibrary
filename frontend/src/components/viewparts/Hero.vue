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
                        <div class="hero__search__form">
                            <form action="#">
                                <input type="text" placeholder="Search...">
                                <button type="submit">Search Now</button>
                            </form>
                        </div>
                        <ul class="hero__categories__tags">
                            <li v-for="(category, index) in categories.slice(0,5)" :key="index">
                                <a :href="'/category/' + category.name.toLowerCase()"><img :src="'img/hero/' + category.img" alt=""> {{category.name}}</a>
                            </li>
                            <li>
                                <a href="/categories/"><img src="img/hero/cat-6.png" alt=""> All Categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Helper from '../../helper'

@Component
export default class Hero extends Vue {
    private api: Helper = new Helper(); 
    private categories: Array<object> = []
    private numOfBooks = 0;
    private fetchCategories(): void {
        this.api.getCategories().then(repsonse => {
            this.categories = repsonse.data;
        })
    }
    private getNumOfBooks(): void {
        this.api.getNumOfBooks().then(
            response => {
                this.numOfBooks = response.data;
            }
        );
    }
    mounted() {
     this.fetchCategories();
     this.getNumOfBooks();
    }
}
</script>
<style scoped>
    .set-bg {
        background-image: url('../../assets/img/hero/library-bg.jpg');
    }
</style>