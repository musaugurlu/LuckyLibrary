<template>
<div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <a :href="'/books/'+id">
                            <img :src="bookImage(imgSrc)" alt="Book" style="height: 120%;">
                        </a>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4"><a :href="'/books/'+id">{{title}}</a></p>
                    <p class="subtitle is-6">By {{author}}</p>
                </div>
            </div>

            <div class="content" style="margin-bottom: 2em">
                <p><strong>Description:</strong></p>
                <p>{{ content }}</p>
            </div>
            <p>&nbsp;</p>
            <table class="table">
                <tr>
                    <td><strong>Title: </strong></td>
                    <td>{{title}}</td>
                </tr>
                <tr>
                    <td><strong>Author: </strong></td>
                    <td>{{author}}</td>
                </tr>
                <tr>
                    <td><strong>Page: </strong></td>
                    <td>{{pageCount}}</td>
                </tr>
                <tr>
                    <td><strong>Published Date: </strong></td>
                    <td>{{publishedDate}}</td>
                </tr>
                <tr>
                    <td><strong>Publisher: </strong></td>
                    <td>{{publisher}}</td>
                </tr>
                <tr>
                    <td><strong>ISBN: </strong></td>
                    <td>{{isbn}}</td>
                </tr>
                <tr>
                    <td><strong>Branch: </strong></td>
                    <td>{{branch}}</td>
                </tr>
                <tr>
                    <td><strong>Shelf: </strong></td>
                    <td>{{shelf}}</td>
                </tr>
            </table>
        </div>
        <div class="buttons is-medium is-centered">
          <button class="button is-info">Info</button>
          <button class="button is-success">Success</button>
          <button class="button is-warning">Warning</button>
          <button class="button is-danger">Danger</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    methods: {
        bookImage(image) {
            return image ? image : "img/noimage.jpg";
        }
    }
})
export default class SingleCard extends Vue {
  @Prop() private id!: string;
  @Prop() private imgSrc!: string;
  @Prop() private title!: string;
  @Prop() private author!: string;
  @Prop() private content!: string;
  @Prop() private pageCount!: string;
  @Prop() private publishedDate!: string;
  @Prop() private publisher!: string;
  @Prop() private isbn!: string;
  @Prop() private branch!: string;
  @Prop() private shelf!: string;
}
</script>