<template>
    <div class="breadcrumb-area set-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Books</h2>
                        <div class="breadcrumb__option">
                            <a href="/books"><i class="fa fa-home"></i> Books</a>
                            <span>{{ bookName }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Breadcrumb extends Vue {
    @Prop() public bookName!: string;
}
</script>
<style scoped>
    .set-bg {
        background-image: url('../../assets/img/hero/library-bg.jpg');
    }
</style>