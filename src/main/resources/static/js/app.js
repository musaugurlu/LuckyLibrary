let bookCard = {
    props: [
        'id',
        'imgSrc',
        'title',
        'subTitle',
        'content'
    ],
    template: `
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
                    <p class="subtitle is-6">{{subTitle}}</p>
                </div>
            </div>

            <div class="content" style="margin-bottom: 2em">
                {{ shortenContent(content) }}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Details</a>
        </footer>
    </div>
    `,
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
}

var App = new Vue({
    el: "#app",
    components: {
        'book-card' : bookCard
    },
    data: {
        search: "",
        title: "Books",
        cards: []
    },


    computed: {
        filteredCards() {
            var _this = this
            if(this.search.length === 0) return this.cards
            return this.cards.map(function(card) {
                return {
                    name: card.name,
                    cardColor: card.cardColor,
                    items: card.items.filter(function (item) {
                        return item.includes(_this.search)
                    })
                }
            })
        }
    },

    methods: {
        removeCard (card) {
            this.cards.splice(this.cards.indexOf(card), 1)
        },
        clearSearchField () {
            this.search = this.shortenContent("Search")
        }
    }
});
