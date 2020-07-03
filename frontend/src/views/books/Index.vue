<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 07/03/2020 2:35:37 pm
-->
<template>
    <div>
        <page-header />
        <page-books />
        <page-footer />
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import PageHeader from '@/components/viewparts/Header.vue'
import PageBooks from '@/components/books/Books.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

@Component({
    components: {
        PageHeader,
        PageBooks,
        PageFooter
    }
})
export default class Books extends Vue {
     
}
</script>