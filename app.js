Vue.component("resident-component", {
    props: ["resident"],
    filters: {
        fullName(val) {
            return `${val.first} ${val.last}`
        }
    },
    methods: {
        incrementAge(name) {
            name.age++
        },
        decrementAge(name) {
            name.age++
        }
    },
    template: `
    <div>
        <h4>Name: {{resident | fullName}}</h4>
        <h4>Age: {{resident.age}}</h4>
        <button v-on:click="incrementAge(resident)">+</button>
        <button v-on:click="decrementAge(resident)">-</button>
        <input v-model="resident.first" />
        <input v-model="resident.last" />
    </div>
    `
});

const app = new Vue({
    el: "#firstDiv",
    data: {
        residents: [
            {
                first: "Eran",
                last: "Dromy",
                age: 32
            },
            {
                first: "Natalie",
                last: "Schneider",
                age: 31
            }
        ]
    },
    template: `
    <div>
        <resident-component v-for="item in residents" v-bind:resident="item" />
    </div>`
})