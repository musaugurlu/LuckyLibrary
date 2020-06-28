<template>
    <div>
        <page-header />
        <breadcrumb :category="$route.params.category" />
        <book-list :category="$route.params.category"/>
        <page-footer />
    </div>
</template>
<script>
import PageHeader from '@/components/viewparts/Header.vue'
import Breadcrumb from '@/components/categories/Breadcrumb.vue'
import BookList from '@/components/categories/BookList.vue'
import PageFooter from '@/components/viewparts/Footer.vue'

export default {
    name: 'Category',
    components: {
        PageHeader,
        Breadcrumb,
        BookList,
        PageFooter
    }
}
</script>