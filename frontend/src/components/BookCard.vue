<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <router-link :to="'/books/'+id">
                            <img :src="bookImage(imgSrc)" alt="Book" style="height: 120%;">
                        </router-link>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4"><a :href="'/books/'+id">{{title}}</a></p>
                    <p class="subtitle is-6">{{subTitle}}</p>
                </div>
            </div>

            <div class="content" style="margin-bottom: 2em">
                {{ shortenContent(content) }}
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="'/books/'+id" :class="'card-footer-item'">Details</router-link>
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    methods: {
        shortenContent(text) {
            if (text && text.length > 250) {
                return text.substr(0,250) + ' ...';
            } else {
                return text
            }

        },
        bookImage(image) {
            return image ? image : "img/noimage.jpg";
        }
    }
})
export default class BookCard extends Vue {
  @Prop() private id!: string;
  @Prop() private imgSrc!: string;
  @Prop() private title!: string;
  @Prop() private subTitle!: string;
  @Prop() private content!: string;
}
</script>