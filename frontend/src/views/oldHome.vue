<template>
  <div>
    <navbar />
    <homepage />
    <announcement msg="Lucky Library is closed on" tag="Sundays" />

    <!-- <section class="container cards-container"> -->
    <div class="columns">
      <div class="column">
        <a class="bd-focus-item column has-text-centered" href="/books/">
          <figure class="bd-focus-icon">
            <img src="/img/book-pages.jpg" width="300" height="200" />
          </figure>
        </a>
      </div>
      <div class="column">
        <a class="bd-focus-item column has-text-centered" href="/books/">
          <figure class="bd-focus-icon">
            <img src="/img/book-pages.jpg" width="300" height="200" />
          </figure>
        </a>
      </div>
      <div class="column">
        <a class="bd-focus-item column has-text-centered" href="/books/">
          <figure class="bd-focus-icon">
            <img src="/img/book-pages.jpg" width="300" height="200" />
          </figure>
        </a>
      </div>
    </div>
    <!-- </section> -->
    <!-- <section class="container cards-container">
        <div class="title">New Books...</div> <hr />

        <div class="container" style="
        display: grid;
        grid-template-columns:repeat(auto-fill,minmax(25em,1fr));
        grid-gap: 1em;">
            <book-card v-for="book in newBooks" :key="book.id"
                       :id="book.id"
                       :imgSrc="book.imgUrl"
                       :title="book.title"
                       :subTitle="'By ' + book.author"
                       :content="book.description"
            ></book-card>
        </div>
    </section>
    <p style="padding:50px;">&nbsp;</p>
    
    <section class="container cards-container">
        <div class="title">Most Popular Books...</div> <hr />
        <div class="container" style="
        display: grid;
        grid-template-columns:repeat(auto-fill,minmax(25em,1fr));
        grid-gap: 1em;">
            <book-card v-for="book in popularBooks" :key="book.id"
                       :id="book.id"
                       :imgSrc="book.imgUrl"
                       :title="book.title"
                       :sub-Title="'By ' + book.author"
                       :content="book.description"
            ></book-card>
        </div>
    </section>-->

    <page-footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Homepage from "@/components/HomePage.vue";
import Announcement from "@/components/Announcement.vue";
import PageFooter from "@/components/Footer.vue";
// import BookCard from "@/components/BookCard.vue";
//import SingleCard from '@/components/SingleCard.vue'
import axios from "axios";

const BACKENDURL = "http://localhost:8090";

export default {
  name: "Home",
  components: {
    Navbar,
    Homepage,
    Announcement,
    PageFooter
    // BookCard
    //  SingleCard
  },
  data() {
    return {
      search: "",
      title: "Books",
      newBooks: [],
      popularBooks: []
    };
  },
  computed: {
    // filteredCards() {
    //     // const _this = this
    //     if(this.search.length === 0) return this.cards
    //     return this.cards.map(function(card) {
    //         return {
    //             name: card.name,
    //             cardColor: card.cardColor,
    //             items: card.items.filter(function (item) {
    //                 return item.includes(/*_*/this.search);
    //             })
    //         }
    //     })
    // }
  },

  methods: {
    removeCard(card) {
      this.cards.splice(this.cards.indexOf(card), 1);
    },

    clearSearchField() {
      this.search = this.shortenContent("Search");
    },

    fetchBooks(type) {
      let cardUrl = "";
      if (type === "newbooks") {
        cardUrl = BACKENDURL + "/books/newbooks";
        axios.get(cardUrl).then(response => {
          this.newBooks = response.data;
        });
      } else {
        cardUrl = BACKENDURL + "/books/popularbooks";
        axios.get(cardUrl).then(response => {
          this.popularBooks = response.data;
        });
      }
    }
  },

  mounted() {
    // this.fetchBooks("newbooks");
    // this.fetchBooks("popularbooks");
  }
};
</script>
