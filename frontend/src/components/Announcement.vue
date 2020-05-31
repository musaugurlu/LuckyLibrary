<template>
    <div class="box cta">
        <p class="has-text-centered">
            <span>{{msg}}</span> <span class="tag is-link">{{tag}}</span>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private tag!: string;
}
</script>