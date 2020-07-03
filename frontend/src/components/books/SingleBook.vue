<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:32:53 pm
-->
<template>
    <div class="col-lg-3 col-md-3">
        <div class="blog__item">
            <div class="blog__item__pic" :style="getBGStyle()"></div>
            <div class="blog__item__text">
                <ul class="blog__item__tags">
                    <li><i class="fa fa-tags"></i> {{category}}</li>
                </ul>
                <h5><a :href="'/book/' + id"> {{title}}</a></h5>
                <ul class="blog__item__widget">
                    <li><i class="fa fa-clock-o"></i> {{publishedDate}}</li>
                    <li><i class="fa fa-user"></i> {{author}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class Book extends Vue {
    @Prop() private id!: string;
    @Prop() private img!: string;
    @Prop() private title!: string;
    @Prop() private author!: string;
    @Prop() private publishedDate!: string;
    @Prop() private category!: string;

    getBGStyle() {
        return "background-image: url('" + this.img + "');background-repeat: no-repeat;background-position: center;";
    }
}
</script>