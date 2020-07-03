<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:35:40 pm
-->
<template>
    <div>
        <page-header />
        <page-search />
        <page-footer />
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import PageHeader from '@/components/viewparts/Header.vue'
import PageSearch from '@/components/books/Search.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

@Component({
    components: {
        PageHeader,
        PageSearch,
        PageFooter
    }
})
export default class Search extends Vue {
     
}
</script>