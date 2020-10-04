<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:19:40 am
-->
<template>
    <div>
        <page-header />
        <page-search />
        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/viewparts/Header.vue'
import PageSearch from '@/components/books/Search.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

export default {
    components: {
        PageHeader,
        PageSearch,
        PageFooter
    }
}
</script>