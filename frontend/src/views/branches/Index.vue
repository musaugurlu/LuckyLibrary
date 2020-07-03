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
    name: 'Home',
    components: {
        PageHeader,
        Branches,
        PageFooter
    } 
}
</script>