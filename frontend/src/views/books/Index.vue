<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:18:51 am
-->
<template>
    <div>
        <page-header />
        <page-books />
        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/viewparts/Header.vue'
import PageBooks from '@/components/books/Books.vue'
import PageFooter from '@/components/viewparts/Footer.vue'


export default {
    components: {
        PageHeader,
        PageBooks,
        PageFooter
    }
}
</script>