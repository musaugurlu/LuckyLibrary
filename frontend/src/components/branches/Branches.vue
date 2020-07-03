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

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Helper from '../../helper'

@Component
export default class Branches extends Vue { 
    private api: Helper = new Helper();
    private branches: Array<object> = []
    private fetchBranches(): void {
        this.api.getBranches().then(repsonse => {
            this.branches = repsonse.data;
        })
    }
    mounted() {
        this.fetchBranches();   
    }
}

</script>