<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:34:36 pm
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
                        <div class="categories__item" v-for="(category, index) in categories.slice(0,5)" :key="index">
                            <!-- <img :src="'/img/categories/' + category.img" alt=""> -->
                            <img src="/img/categories/category-large.png" alt="">
                            <h5>{{category.name}}</h5>
                            <span>{{category.bcount}} Books</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Helper from '../../helper'

@Component
export default class Category extends Vue { 
    private api: Helper = new Helper();
    private categories: Array<object> = []
    private fetchCategories(): void {
        this.api.getCategories().then(repsonse => {
            this.categories = repsonse.data;
        })
    }
    mounted() {
     this.fetchCategories();   
    }
}

</script>