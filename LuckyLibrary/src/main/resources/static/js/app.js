const bookCard = {
    props: [
        'imgSrc',
        'title',
        'subTitle',
        'content'
    ],
    template: `
    <div class="column is-one-quarter">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img :src="imgSrc" alt="Book">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{title}}</p>
                        <p class="subtitle is-6">{{subTitle}}</p>
                    </div>
                </div>
    
                <div class="content">
                    {{content}}
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
    `
}

var App = new Vue({
    el: "#app",
    components: {
        'book-card' : bookCard
    },
    data() {
        return {
            search: "",
            title: "Books",
            cards: []
        }
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
            this.search = ''
        }
    }
});
