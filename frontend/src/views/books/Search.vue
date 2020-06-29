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