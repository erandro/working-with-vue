Vue.component("quote-component", {
    props: ["quote"],
    filters: {
        filterTheme(theme) {
            switch (theme) {
                case "movie":

                    break;
                case "game":

                    break;
                default:
                    break;
            }
        }
    },
    methods: {

    },
    template: `
    <div>
        <h4>Quote: {{quote.quote}}</h4>
        <h4>Theme: {{quote.theme}}</h4>
        <br>
    </div>
    `
});

const app = new Vue({
    el: "#firstDiv",
    data: {
        quotes: []
    },
    mounted() {
        fetch("https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json")
            .then(response => response.json())
            .then((data) => {
                this.quotes = data;
            })
    },
    template: `
    <div>
        <button>movie</button>
        <button>game</button>
        <quote-component v-for="item in quotes" v-bind:quote="item" />
    </div>`
})