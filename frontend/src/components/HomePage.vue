<template>
    <section class="hero is-info">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="https://picsum.photos/800/600/?random" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            Lucky Library
                        </h1>
                        <h2 class="subtitle is-4">
                            A World of Books for Young and Old.
                        </h2>
                        <br>
                       <!-- <p class="has-text-centered">
                           <a class="button is-medium is-info is-outlined">
                                Learn more
                            </a>
                        </p> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Homepage extends Vue {
}
</script>