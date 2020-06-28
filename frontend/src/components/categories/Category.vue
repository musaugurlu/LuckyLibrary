<template>
    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Categories</h2>
                        <p></p>
                    </div>
                    <div class="categories__item__list">
                        <a v-for="(category, index) in categories" :key="index" :href="'/category/' + category.name.toLowerCase()">
                            <div class="categories__item">
                                <img :src="'/img/categories/' + category.img" alt="">
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