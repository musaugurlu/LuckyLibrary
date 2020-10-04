<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:21:10 am
-->
<template>
    <div>
        <page-header />
        <branches />
        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/viewparts/Header.vue'
import Branches from '@/components/branches/Branches.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

export default {
    components: {
        PageHeader,
        Branches,
        PageFooter
    } 
}
</script>