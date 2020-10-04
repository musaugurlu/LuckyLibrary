<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:05:31 am
-->
<template>
    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Branches</h2>
                        <p></p>
                    </div>
                    <div class="categories__item__list">
                        <a v-for="(branch, index) in branches" :key="index" :href="'/branch/' + branch.id">
                            <div class="categories__item">
                                <img :src="'/img/categories/' + category.img" alt="">
                                <h5>{{branch.name}}</h5>
                                <!-- <span>{{category.bcount}} Books</span> -->
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
import Helper from '../../helper'

const api = new Helper();

export default {
    data() {
        return {
            branches: []
        }
    },

    methods: {
        fetchBranches() {
            api.getBranches().then(repsonse => {
                this.branches = repsonse.data;
            })
        }
    },

    mounted() {
        this.fetchBranches(); 
    },
}
</script>