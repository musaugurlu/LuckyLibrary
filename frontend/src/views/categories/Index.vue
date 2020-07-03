<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:37:35 pm
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
    name: 'Home',
    components: {
        PageHeader,
        Category,
        PageFooter
    } 
}
</script>