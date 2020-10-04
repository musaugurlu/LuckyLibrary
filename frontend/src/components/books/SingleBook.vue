<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 2:43:47 am
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

<script>
export default {
    props: [
        'id',
        'img',
        'title',
        'author',
        'publishedDate',
        'category'
    ],

    methods: {
        getBGStyle() {
            return "background-image: url('" + this.img + "');background-repeat: no-repeat;background-position: center;";
        }
    },
}
</script>