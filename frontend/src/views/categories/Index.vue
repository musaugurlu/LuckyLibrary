<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:24:42 am
-->
<template>
    <div>
        <page-header />
        <category />
        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/viewparts/Header.vue'
import Category from '@/components/categories/Category.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

export default {
    components: {
        PageHeader,
        Category,
        PageFooter
    } 
}
</script>