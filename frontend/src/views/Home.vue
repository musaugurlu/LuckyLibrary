<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:38:22 pm
-->
<template>
    <div>
        <page-header />
        <page-hero />
        <page-category />
        <page-footer />
    </div>
</template>
<script>
import PageHeader from '@/components/viewparts/Header.vue'
import PageHero from '@/components/viewparts/Hero.vue'
import PageCategory from '@/components/viewparts/Category.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

export default {
    name: 'Home',
    components: {
        PageHeader,
        PageHero,
        PageCategory,
        PageFooter
    } 
}
</script>