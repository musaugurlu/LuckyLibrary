<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 2:53:14 am
-->
<template>
    <div class="breadcrumb-area set-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Books</h2>
                        <div class="breadcrumb__option">
                            <a href="/books"><i class="fa fa-home"></i> Books</a>
                            <span>{{ bookName }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'bookName' ]
}
</script>

<style scoped>
    .set-bg {
        background-image: url('../../assets/img/hero/library-bg.jpg');
    }
</style>